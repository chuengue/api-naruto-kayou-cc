import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';

import * as yup from 'yup';
import { CollectionProvider } from '../../database/providers/collections';
import {
    IGetCollectionsProps,
    IGetWishListProps
} from '../../database/providers/types';
import {
    CollectionErrors,
    GenericErrors,
    getErrorMessage,
    sendErrorResponse,
    sendSuccessResponseList
} from '../../shared';

const TGenericError = getErrorMessage('Errors.genericErrors');
const TCollectionErrors = getErrorMessage('Errors.collectionErrors');

export const getCollectionsValidation = validation(getSchema => ({
    query: getSchema<Omit<IGetCollectionsProps, 'userId'>>(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0)
        })
    )
}));

export const getCollections = async (
    req: Request<{}, {}, {}, IGetCollectionsProps>,
    res: Response
) => {
    const CollectionsGetProps: IGetWishListProps = {
        page: req.query.page || 1,
        limit: req.query.limit || 10,
        userId: req.headers.userId as string
    };

    const result = await CollectionProvider.getCollections(CollectionsGetProps);

    const count = await CollectionProvider.countCollections(
        req.headers.userId as string
    );

    if (result instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TCollectionErrors(CollectionErrors.errorOnGet)
        );
    } else if (count instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(GenericErrors.CountError)
        );
    }
    if (result.collections.length === 0) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TCollectionErrors(CollectionErrors.EmptyListCollection)
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
