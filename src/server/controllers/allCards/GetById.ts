import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { CardsProviders } from '../../database/providers/allCards';
import { SQLErrors, getErrorMessage, sendErrorResponse, sendSucessResponseList } from '../../shared';
import { validation } from '../../shared/middleware';
import { IGetByIdCardsParamProps } from './types';

const TGenericError = getErrorMessage('Errors.genericErrors');

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IGetByIdCardsParamProps>(
        yup.object().shape({
            cardId: yup.string().required().length(36),
        })
    ),
}));

export const getById = async (
    req: Request<IGetByIdCardsParamProps>,
    res: Response
) => {
    if (!req.params.cardId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado.',
            },
        });
    }

    const result = await CardsProviders.getById(req.params.cardId);

    if (result instanceof Error && SQLErrors.NOT_FOUND_REGISTER) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(1008)
        );
    }
    if (result instanceof Error && SQLErrors.GENERIC_DB_ERROR) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(1006)
        );
    }

    sendSucessResponseList(res,StatusCodes.OK,result);
};
