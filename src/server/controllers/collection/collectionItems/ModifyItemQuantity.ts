import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { CollectionProvider } from '../../../database/providers/collections';
import {
    CollectionErrors,
    getErrorMessage,
    sendErrorResponse,
    SQLErrors,
    validation
} from '../../../shared';
import { sendSuccessResponse } from '../../../shared/utils/SendSuccessResponse';
import {
    IModifyQuantityItemCollectionBody,
    IModifyQuantityItemCollectionParams
} from './types';

const TCollectionErrors = getErrorMessage('Errors.collectionErrors');

export const modifyItemQuantityValidation = validation(getSchema => ({
    body: getSchema<IModifyQuantityItemCollectionBody>(
        yup.object().shape({
            newQuantity: yup.number().integer().moreThan(0)
        })
    ),
    params: getSchema<IModifyQuantityItemCollectionParams>(
        yup.object().shape({
            collectionId: yup.string().required().length(36),
            cardId: yup.string().required().length(36)
        })
    )
}));

export const modifyItemQuantity = async (
    req: Request<
        IModifyQuantityItemCollectionParams,
        {},
        IModifyQuantityItemCollectionBody
    >,
    res: Response
) => {
    const updateProps = {
        collectionId: req.params.collectionId as string,
        cardId: req.params.cardId as string,
        newQuantity: req.body.newQuantity as number,
        userId: req.headers.userId as string
    };

    try {
        await CollectionProvider.modifyItemQuantity(updateProps);
    } catch (error: any) {
        switch (error.message) {
            case SQLErrors.NOT_FOUND_REGISTER:
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_REQUEST,
                    TCollectionErrors(
                        CollectionErrors.ErrorCardOrCollectionNotFound
                    )
                );

            default:
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_REQUEST,
                    TCollectionErrors(CollectionErrors.ErrorModifyQuantityItem)
                );
        }
    }

    return sendSuccessResponse(res, StatusCodes.OK, 'CREATED');
};
