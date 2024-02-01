import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { CollectionProvider } from '../../../database/providers/collections';
import {
    CollectionErrors,
    getErrorMessage,
    ProvidersErrors,
    sendErrorResponse,
    sendSuccessResponseList,
    SQLErrors
} from '../../../shared';
import { validation } from '../../../shared/middleware';
import { IAddItemCollectionBody, IAddItemCollectionProps } from './type';

const TCollectionErrors = getErrorMessage('Errors.collectionErrors');

export const addItemToCollectionValidation = validation(getSchema => ({
    params: getSchema<IAddItemCollectionProps>(
        yup.object().shape({
            cardId: yup.string().required().length(36),
            collectionId: yup.string().required().length(36)
        })
    )
}));

export const addItemToCollection = async (
    req: Request<IAddItemCollectionProps, {}, IAddItemCollectionBody>,
    res: Response
) => {
    const addItemParams = {
        userId: req.headers.userId as string,
        cardId: req.params.cardId as string,
        collectionId: req.params.collectionId,
        quantity: req.body.cardQuantity
    };
    const result = await CollectionProvider.addItemCollection(addItemParams);

    if (result instanceof Error) {
        switch (result.message) {
            case SQLErrors.GENERIC_DB_ERROR:
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_GATEWAY,
                    TCollectionErrors(CollectionErrors.ErrorAddItem)
                );
            case ProvidersErrors.ALREADY_EXISTS_IN_COLLECTION:
                return sendErrorResponse(
                    res,
                    StatusCodes.CONFLICT,
                    TCollectionErrors(
                        CollectionErrors.AlreadyExistsInCollection
                    )
                );
            default:
                return sendErrorResponse(
                    res,
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    result.message
                );
        }
    }
    return sendSuccessResponseList(res, StatusCodes.CREATED, result);
};
