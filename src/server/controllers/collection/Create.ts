import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { CollectionProvider } from '../../database/providers/collections';
import {
    CollectionErrors,
    getErrorMessage,
    ProvidersErrors,
    sendErrorResponse,
    sendSuccessResponseList,
    SQLErrors
} from '../../shared';
import { validation } from '../../shared/middleware';
import { ICreateCollectionBodyProps } from './types';

const TCollectionErrors = getErrorMessage('Errors.collectionErrors');

export const createValidation = validation(getSchema => ({
    body: getSchema<Omit<ICreateCollectionBodyProps, 'userId'>>(
        yup.object().shape({
            name: yup.string().required().min(3),
            description: yup.string().optional(),
            isPublic: yup.boolean().required()
        })
    )
}));

export const create = async (req: Request<{}, {}, ICreateCollectionBodyProps>, res: Response) => {
    const createProps = { ...req.body, userId: req.headers.userId as string };

    const result = await CollectionProvider.create(createProps);

    if (result instanceof Error && result.message === SQLErrors.GENERIC_DB_ERROR) {
        return sendErrorResponse(res, StatusCodes.BAD_GATEWAY, TCollectionErrors(CollectionErrors.errorOnCreate));
    }

    if (result instanceof Error && result.message === ProvidersErrors.FAILED_FETCH_INSERTED_COLLECTION) {
        return sendErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, result.message);
    }
    return sendSuccessResponseList(res, StatusCodes.OK, { collectionId: result });
};
