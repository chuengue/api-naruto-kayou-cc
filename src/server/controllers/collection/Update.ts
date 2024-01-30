import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';

import * as yup from 'yup';
import { CollectionProvider } from '../../database/providers/collections';
import { ICreateCollectionBodyProps, IUpdateCollectionProps } from './types';

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
        Omit<ICreateCollectionBodyProps, 'UserId'>
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
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado.'
            }
        });
    }

    const result = await CollectionProvider.updateCollection(updateProps);
    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.NO_CONTENT).json(result);
};
