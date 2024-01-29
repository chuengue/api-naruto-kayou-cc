import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { CollectionProvider } from '../../database/providers/collections';
import { IDeleteCollectionProps } from '../../database/providers/types';
import { CollectionErrors, ProvidersErrors, getErrorMessage, sendErrorResponse } from '../../shared';
import { validation } from '../../shared/middleware';
const TCollectionErrors = getErrorMessage('Errors.collectionErrors');

export const deleteCollectionValidation = validation(getSchema => ({
    params: getSchema<Omit<IDeleteCollectionProps, 'userId'>>(
        yup.object().shape({
            collectionId: yup.string().required()
        })
    )
}));

export const deleteCollection = async (req: Request<Partial<IDeleteCollectionProps>>, res: Response) => {
    const addItemParams = {
        userId: req.headers.userId as string,
        collectionId: req.params.collectionId as string
    };
    const result = await CollectionProvider.deleteCollection(addItemParams);

    if (result instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.UNAUTHORIZED,
            result.message === ProvidersErrors.COLLECTION_UNAUTHORIZED
                ? TCollectionErrors(CollectionErrors.CollectionUnauthorized)
                : TCollectionErrors(CollectionErrors.errorOnDelete)
        );
    }

    return res.status(StatusCodes.NO_CONTENT).json(result);
};
