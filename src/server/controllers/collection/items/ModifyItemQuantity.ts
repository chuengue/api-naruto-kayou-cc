import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { CollectionProvider } from '../../../database/providers/collections';
import {
    CollectionErrors,
    getErrorMessage,
    sendErrorResponse,
    validation
} from '../../../shared';
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
        newQuantity: req.body.newQuantity as number
    };
    if (!req.params.collectionId) {
        return sendErrorResponse(
            res,
            StatusCodes.BAD_REQUEST,
            TCollectionErrors(CollectionErrors.errorOnUpdate)
        );
    }

    const result = await CollectionProvider.modifyItemQuantity(updateProps);
    if (result instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.BAD_REQUEST,
            TCollectionErrors(CollectionErrors.errorOnUpdate)
        );
    }

    return res.status(StatusCodes.NO_CONTENT).send();
};
