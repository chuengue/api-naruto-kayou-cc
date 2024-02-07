import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { IRole } from '../../database/models/role';
import { roleProviders } from '../../database/providers/roles';
import {
    GenericErrors,
    getErrorMessage,
    ProvidersErrors,
    sendErrorResponse,
    SQLErrors
} from '../../shared';
import { validation } from '../../shared/middleware';

const TGenericErrors = getErrorMessage('Errors.genericErrors');

export const createValidation = validation(getSchema => ({
    body: getSchema<Omit<IRole, 'id' | 'createdAt'>>(
        yup.object().shape({
            roleName: yup.string().required()
        })
    )
}));

export const create = async (
    req: Request<{}, {}, Omit<IRole, 'id' | 'createdAt'>>,
    res: Response
) => {
    const result = await roleProviders.create({ roleName: req.body.roleName });

    if (
        result instanceof Error &&
        result.message === SQLErrors.GENERIC_DB_ERROR
    ) {
        return sendErrorResponse(
            res,
            StatusCodes.BAD_GATEWAY,
            TGenericErrors(GenericErrors.InternalServerError)
        );
    }

    if (
        result instanceof Error &&
        result.message === ProvidersErrors.FAILED_FETCH_INSERTED_COLLECTION
    ) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            result.message
        );
    }
    res.send(StatusCodes.CREATED);
};
