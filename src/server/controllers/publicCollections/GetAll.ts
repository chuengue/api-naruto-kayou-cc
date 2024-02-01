import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';

import * as yup from 'yup';
import { PublicCollectionsProviders } from '../../database/providers/publicCollections';
import { IPublicCollectionsProps } from '../../database/providers/types';
import {
    GenericErrors,
    getErrorMessage,
    sendErrorResponse,
    sendSuccessResponseList
} from '../../shared';

const TGenericError = getErrorMessage('Errors.genericErrors');

export const getAllPublicCollectionValidation = validation(getSchema => ({
    query: getSchema<IPublicCollectionsProps>(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0),
            name: yup.string().optional().min(1),
            author: yup.string().optional().min(1)
        })
    )
}));

export const getAllPublicCollection = async (
    req: Request<{}, {}, {}, IPublicCollectionsProps>,
    res: Response
) => {
    const filters = {
        author: req.query.author || '',
        name: req.query.name || '',
        page: req.query.page || 1,
        limit: req.query.limit || 10
    };

    const result =
        await PublicCollectionsProviders.getPublicCollections(filters);

    const count = await PublicCollectionsProviders.count(filters);

    if (result instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(1006)
        );
    } else if (count instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(GenericErrors.CountError)
        );
    }

    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', count);

    sendSuccessResponseList(
        res,
        StatusCodes.OK,
        result,
        count,
        req.query.page || 1,
        req.query.limit || 10
    );
};
