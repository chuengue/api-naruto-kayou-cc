import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { IUser } from '@database/models';
import { UsersProvider } from '@providers/user';
import { EJWTErrors } from '@shared/services/JWTService/types';
import {
    JWTService,
    LoginErrorCodes,
    PasswordCrypto,
    SQLErrors,
    getErrorMessage,
    sendErrorResponse,
    validation,
} from '../../shared';
import { ISignInUserBodyProps } from './types';

const TLoginError = getErrorMessage('Errors.loginErrors');
const TGenericError = getErrorMessage('Errors.genericErrors');

export const signInValidation = validation((getSchema) => ({
    body: getSchema<ISignInUserBodyProps>(
        yup.object().shape({
            email: yup.string().required().email().min(5),
            password: yup.string().required().min(6),
        })
    ),
}));

export const signIn = async (
    req: Request<{}, {}, ISignInUserBodyProps>,
    res: Response
) => {
    const { email, password } = req.body;
    const user = (await UsersProvider.getByEmail(email)) as IUser;

    const acessTokenResponse = JWTService.sign({ uid: user.id });

    if (user instanceof Error && user.message === SQLErrors.GENERIC_DB_ERROR) {
        return sendErrorResponse(
            res,
            StatusCodes.BAD_GATEWAY,
            TGenericError(LoginErrorCodes.DATABASE_CONNECTION_ERROR)
        );
    }
    if (
        user instanceof Error &&
        user.message === SQLErrors.NOT_FOUND_REGISTER
    ) {
        return sendErrorResponse(
            res,
            StatusCodes.UNAUTHORIZED,
            TLoginError(LoginErrorCodes.INVALID_EMAIL_OR_PASSWORD)
        );
    }
    const passwordMatch = await PasswordCrypto.verifyPassword(
        password,
        user.password
    );
    if (!passwordMatch) {
        return sendErrorResponse(
            res,
            StatusCodes.UNAUTHORIZED,
            TLoginError(LoginErrorCodes.INVALID_EMAIL_OR_PASSWORD)
        );
    }

    if (acessTokenResponse === EJWTErrors.SECRET_NOT_FOUND) {
        sendErrorResponse(res, StatusCodes.UNAUTHORIZED, acessTokenResponse);
    }
    return res.status(StatusCodes.OK).json({
        acessToken: acessTokenResponse,
    });
};
