import { Request, Response } from 'express';

import { validation } from '../../shared/middleware';

import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { IUser } from '../../database/models';
import { UsersProvider } from '../../database/providers/user';
import { ISignInUserBodyProps } from './types';

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

    const result = (await UsersProvider.getByEmail(email)) as IUser;

    if (result instanceof Error) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Email ou senha invalida',
            },
        });
    }
    if (password !== result.password) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Email ou senha invalida',
            },
        });
    } else
        res.status(StatusCodes.OK).json({
            acessToken: 'teste.teste.teste',
        });
    //return res.status(StatusCodes.CREATED).json(result);
};
