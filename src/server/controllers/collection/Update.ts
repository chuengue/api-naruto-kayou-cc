import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';

import * as yup from 'yup';
import { CollectionProvider } from '../../database/providers/collections';
import { CollectionErrors, getErrorMessage, sendErrorResponse } from '../../shared';
import { IUpdateCollectionProps } from './types';

const TCollectionErrors = getErrorMessage('Errors.collectionErrors');

export const updateCollectionValidation = validation(getSchema => ({
    body: getSchema<Omit<IUpdateCollectionProps, 'collectionId'>>(
        yup.object().shape({
            name: yup.string().optional(),
            description: yup.string().optional(),
            isPublic: yup.boolean().optional()
        })
    ),
    params: getSchema<Omit<IUpdateCollectionProps, 'name' | 'description' | 'isPublic'>>(
        yup.object().shape({
            collectionId: yup.string().required()
        })
    )
}));

export const updateCollection = async (
    req: Request<
        Omit<IUpdateCollectionProps, 'name' | 'description' | 'isPublic'>,
        {},
        Omit<IUpdateCollectionProps, 'UserId'>
    >,
    res: Response
) => {
    const updateProps = {
        name: req.body.name,
        description: req.body.description,
        isPublic: req.body.isPublic,
        collectionId: req.params.collectionId
    };
    if (!req.params.collectionId) {
        return sendErrorResponse(res, StatusCodes.BAD_REQUEST, TCollectionErrors(CollectionErrors.errorOnUpdate));
    }

    const result = await CollectionProvider.updateCollection(updateProps);
    if (result instanceof Error) {
        return sendErrorResponse(res, StatusCodes.BAD_REQUEST, TCollectionErrors(CollectionErrors.errorOnUpdate));
    }

    return res.status(StatusCodes.NO_CONTENT).send();
};
