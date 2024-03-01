import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { IRarity } from '../../database/models';
import { RaritiesProviders } from '../../database/providers/rarities';
import { GenericErrors, getErrorMessage, sendErrorResponse, SQLErrors } from '../../shared';
import { validation } from '../../shared/middleware';

const TGenericErrors = getErrorMessage('Errors.genericErrors');

export const createValidation = validation(getSchema => ({
    body: getSchema<Pick<IRarity, 'name' | 'isPromo'>>(
        yup.object().shape({
            name: yup.string().required(),
            isPromo: yup.boolean().optional(),
        })
    )
}));

export const create = async (
    req: Request<{}, {}, Pick<IRarity, 'name' | 'isPromo'>>,
    res: Response
) => {
    try {
        await  RaritiesProviders.create({
            name: req.body.name,
            isPromo: req.body.isPromo,
        });

        res.sendStatus(StatusCodes.CREATED);
    } catch (error: any) {
        switch (error.message) {
            case SQLErrors.DUPLICATE_REGISTER:
                return sendErrorResponse(
                    res,
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    TGenericErrors(GenericErrors.DuplicateRegister)
                );
            default:
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_GATEWAY,
                    TGenericErrors(GenericErrors.InternalServerError)
                );
        }
    }
};
