import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { IUser } from '../../database/models';
import { UsersProvider } from '../../database/providers/user';
import {
    GenericErrors,
    JWTService,
    LoginErrors,
    PasswordCrypto,
    SQLErrors,
    getErrorMessage,
    sendErrorResponse,
    validation
} from '../../shared';
import { EJWTErrors } from '../../shared/services/JWTService/types';
import { ISignInUserBodyProps, ISignInUserBodyPropsValidation } from './types';

const TLoginError = getErrorMessage('Errors.loginErrors');
const TGenericError = getErrorMessage('Errors.genericErrors');

export const signInValidation = validation(getSchema => ({
    body: getSchema<ISignInUserBodyPropsValidation>(
        yup.object().shape({
            identifier: yup.string().required().min(5),
            password: yup.string().required().min(3)
        })
    )
}));

export const signIn = async (
    req: Request<{}, {}, ISignInUserBodyProps>,
    res: Response
) => {
    const { identifier, password } = req.body;

    try {
        let user: IUser | Error;

        if (identifier.includes('@')) {
            user = await UsersProvider.getByEmail(identifier);
        } else {
            user = await UsersProvider.getByUsername(identifier);
        }

        if (user instanceof Error) {
            switch (user.message) {
                case SQLErrors.GENERIC_DB_ERROR:
                    return sendErrorResponse(
                        res,
                        StatusCodes.BAD_GATEWAY,
                        TGenericError(GenericErrors.DatabaseConnectionError)
                    );
                case SQLErrors.NOT_FOUND_REGISTER:
                    return sendErrorResponse(
                        res,
                        StatusCodes.UNAUTHORIZED,
                        TLoginError(LoginErrors.InvalidEmailOrPassword)
                    );
                default:
                    return sendErrorResponse(
                        res,
                        StatusCodes.INTERNAL_SERVER_ERROR,
                        TGenericError(GenericErrors.ExternalServiceFailure)
                    );
            }
        }

        const passwordMatch = await PasswordCrypto.verifyPassword(
            password,
            user.password
        );
        if (!passwordMatch) {
            return sendErrorResponse(
                res,
                StatusCodes.UNAUTHORIZED,
                TLoginError(LoginErrors.InvalidEmailOrPassword)
            );
        }

        const accessToken = JWTService.sign({ uid: user.id });
        if (accessToken === EJWTErrors.SECRET_NOT_FOUND) {
            return sendErrorResponse(
                res,
                StatusCodes.UNAUTHORIZED,
                accessToken
            );
        }

        return res.status(StatusCodes.OK).json({
            results: {
                accessToken,
                user: {
                    id: user.id,
                    userName: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }
            }
        });
    } catch (error) {
        console.error(error);
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(GenericErrors.InternalServerError)
        );
    }
};
