import { validation } from '../../shared/middleware';

import { UsersProvider } from '@providers/user';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import {
    LoginErrorCodes,
    SQLErrors,
    getErrorMessage,
    sendErrorResponse,
} from '../../shared';
import { ISignUpUserBodyProps } from './types';

const TRegisterError = getErrorMessage('Errors.registerErrors');
const TGenericError = getErrorMessage('Errors.genericErrors');

export const signUpValidation = validation((getSchema) => ({
    body: getSchema<ISignUpUserBodyProps>(
        yup.object().shape({
            firstName: yup.string().required().min(3),
            lastName: yup.string().required().min(3),
            email: yup.string().required().email().min(5),
            phoneNumber: yup.string().required().min(6),
            password: yup.string().required().min(6),
        })
    ),
}));

export const signUp = async (
    req: Request<{}, {}, ISignUpUserBodyProps>,
    res: Response
) => {
    const newUser = await UsersProvider.create(req.body);

    if (
        newUser instanceof Error &&
        newUser.message === SQLErrors.GENERIC_DB_ERROR
    ) {
        return sendErrorResponse(
            res,
            StatusCodes.BAD_GATEWAY,
            TGenericError(LoginErrorCodes.DATABASE_CONNECTION_ERROR)
        );
    }
    if (
        newUser instanceof Error &&
        newUser.message === SQLErrors.DUPLICATE_REGISTER
    ) {
        return sendErrorResponse(
            res,
            StatusCodes.BAD_GATEWAY,
            TRegisterError(LoginErrorCodes.EMAIL_ALREADY_USE)
        );
    }

    if (newUser instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            newUser.message
        );
    }

    return res.status(StatusCodes.CREATED).json(newUser);
};
