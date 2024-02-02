import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';

import * as yup from 'yup';
import { PublicCollectionsProviders } from '../../database/providers/publicCollections';
import { IPublicCollectionsProps } from '../../database/providers/types';
import {
    GenericErrors,
    getErrorMessage,
    sendErrorResponse
} from '../../shared';
import { sendSuccessResponse } from '../../shared/utils/SendSuccessResponse';

const TGenericError = getErrorMessage('Errors.genericErrors');

export const getAllPublicCollectionValidation = validation(getSchema => ({
    query: getSchema<IPublicCollectionsProps>(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0),
            collectionName: yup.string().optional().min(3),
            author: yup.string().optional().min(3)
        })
    )
}));

export const getAllPublicCollection = async (
    req: Request<{}, {}, {}, IPublicCollectionsProps>,
    res: Response
) => {
    const filters = {
        author: req.query.author || '',
        name: req.query.collectionName || '',
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

    sendSuccessResponse(
        res,
        StatusCodes.OK,
        result,
        count,
        req.query.page || 1,
        req.query.limit || 10
    );
};
