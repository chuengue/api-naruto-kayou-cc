import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { IRole } from '../../database/models/role';
import { roleProviders } from '../../database/providers/roles';
import {
    GenericErrors,
    getErrorMessage,
    sendErrorResponse,
    SQLErrors
} from '../../shared';
import { validation } from '../../shared/middleware';

const TGenericErrors = getErrorMessage('Errors.genericErrors');

export const deleteValidation = validation(getSchema => ({
    body: getSchema<Omit<IRole, 'roleName' | 'createdAt'>>(
        yup.object().shape({
            id: yup.string().required()
        })
    )
}));
export const deleteRole = async (
    req: Request<Omit<IRole, 'roleName' | 'createdAt'>>,
    res: Response
) => {
    const result = await roleProviders.deleteRole(req.params.id as string);

    if (result instanceof Error) {
        switch (result.message) {
            case SQLErrors.NOT_FOUND_REGISTER:
                return sendErrorResponse(
                    res,
                    StatusCodes.CONFLICT,
                    TGenericErrors(GenericErrors.RecordNotFound)
                );

            case SQLErrors.GENERIC_DB_ERROR:
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_GATEWAY,
                    TGenericErrors(GenericErrors.InternalServerError)
                );
            default:
                return sendErrorResponse(
                    res,
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    result.message
                );
        }
    }

    return res.send(StatusCodes.OK);
};
