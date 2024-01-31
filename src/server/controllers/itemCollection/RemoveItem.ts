import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { IRemoveItemCollection } from '../../database/providers/types';
import {
    CollectionErrors,
    getErrorMessage,
    sendErrorResponse,
    sendSuccessResponseList,
    SQLErrors
} from '../../shared';
import { validation } from '../../shared/middleware';
import { CollectionProvider } from './../../database/providers/collections/index';

const TCollectionErrors = getErrorMessage('Errors.collectionErrors');

export const removeItemCollectionValidation = validation(getSchema => ({
    params: getSchema<IRemoveItemCollection>(
        yup.object().shape({
            cardId: yup.string().required().length(32),
            collectionId: yup.string().required().length(32)
        })
    )
}));

export const removeItemCollection = async (
    req: Request<IRemoveItemCollection>,
    res: Response
) => {
    const removeItemParams = {
        cardId: req.params.cardId,
        collectionId: req.params.collectionId
    };
    const result =
        await CollectionProvider.removeItemCollection(removeItemParams);

    if (result instanceof Error) {
        if (result.message === SQLErrors.NOT_FOUND_REGISTER) {
            return sendErrorResponse(
                res,
                StatusCodes.INTERNAL_SERVER_ERROR,
                TCollectionErrors(CollectionErrors.NotFoundItem)
            );
        }
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TCollectionErrors(CollectionErrors.ErrorRemoveItem)
        );
    }

    return sendSuccessResponseList(res, StatusCodes.OK, result);
};
