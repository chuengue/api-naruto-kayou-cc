
import { validation } from '../../shared/middleware';

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { UsersProvider } from '../../database/providers/user';
import { ISignUpUserBodyProps } from './types';



export const signUpValidation = validation((getSchema) => ({
    body: getSchema<ISignUpUserBodyProps>(
        yup.object().shape({
            firstName: yup.string().required().min(3),
            lastName:yup.string().required().min(3),
            email: yup.string().required().email().min(5),
            phoneNumber: yup.string().required().min(6),
            password: yup.string().required().min(6)
        })
    ),
}));

export const signUp = async (req: Request<{}, {}, ISignUpUserBodyProps>, res: Response) => {
    const result = await UsersProvider.create(req.body);

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.CREATED).json(result);
};