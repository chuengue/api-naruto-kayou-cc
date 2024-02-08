import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { iCard } from '../../database/models';
import { CardsProviders } from '../../database/providers/allCards';
import {
    GenericErrors,
    getErrorMessage,
    sendErrorResponse,
    SQLErrors
} from '../../shared';
import { validation } from '../../shared/middleware';

const TGenericError = getErrorMessage('Errors.genericErrors');

export const CreateCardValidation = validation(getSchema => ({
    body: getSchema<Omit<iCard, 'id'>>(
        yup.object().shape({
            box: yup.string().required(),
            rarity: yup.string().required(),
            name: yup.string().required().min(2),
            code: yup.string().required().min(2),
            imgSrc: yup.string().required().min(4)
        })
    )
}));

export const createCard = async (
    req: Request<{}, {}, Omit<iCard, 'id'>>,
    res: Response
) => {
    try {
        await CardsProviders.create(req.body);
    } catch (error: any) {
        switch (error.message) {
            case SQLErrors.DUPLICATE_REGISTER:
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_GATEWAY,
                    TGenericError(GenericErrors.DuplicateRegister)
                );

            default:
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_GATEWAY,
                    TGenericError(GenericErrors.InternalServerError)
                );
        }
    }

    return res.status(StatusCodes.CREATED).send();
};
