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

export const signIn = async (req: Request<{}, {}, ISignInUserBodyProps>, res: Response) => {
    const { identifier, password } = req.body;

    let user: IUser | Error;

    // Verificar se o identificador parece ser um email
    if (identifier.includes('@')) {
        user = await UsersProvider.getByEmail(identifier);
    } else {
        // Se não for um email, buscar pelo username
        user = await UsersProvider.getByUsername(identifier);
    }

    // Verificar se user é uma instância de IUser
    if (user instanceof Error) {
        if (user.message === SQLErrors.GENERIC_DB_ERROR) {
            return sendErrorResponse(
                res,
                StatusCodes.BAD_GATEWAY,
                TGenericError(GenericErrors.DatabaseConnectionError)
            );
        } else if (user.message === SQLErrors.NOT_FOUND_REGISTER) {
            return sendErrorResponse(res, StatusCodes.UNAUTHORIZED, TLoginError(LoginErrors.InvalidEmailOrPassword));
        } else {
            // Se houver outros erros, envie uma resposta genérica de erro
            return sendErrorResponse(
                res,
                StatusCodes.INTERNAL_SERVER_ERROR,
                TGenericError(GenericErrors.ExternalServiceFailure)
            );
        }
    }

    // Aqui, temos certeza de que 'user' é uma instância de IUser
    const passwordMatch = await PasswordCrypto.verifyPassword(password, user.password);
    if (!passwordMatch) {
        return sendErrorResponse(res, StatusCodes.UNAUTHORIZED, TLoginError(LoginErrors.InvalidEmailOrPassword));
    }

    const acessTokenResponse = JWTService.sign({ uid: user.id });
    if (acessTokenResponse === EJWTErrors.SECRET_NOT_FOUND) {
        sendErrorResponse(res, StatusCodes.UNAUTHORIZED, acessTokenResponse);
    }

    return res.status(StatusCodes.OK).json({
        results: {
            acessToken: acessTokenResponse,
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
};
