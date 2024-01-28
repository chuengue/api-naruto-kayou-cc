import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { CardsProviders } from '../../database/providers/allCards';
import { CardsErrors, GenericErrors, SQLErrors, getErrorMessage, sendErrorResponse, sendSuccessResponseList, validation } from '../../shared';
import { IGetByIdCardsParamProps } from './types';

const TGenericError = getErrorMessage('Errors.genericErrors');
const TCardError = getErrorMessage('Errors.cardsErrors');


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
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TCardError(CardsErrors.NotFountCardId)
        );
    }

    const result = await CardsProviders.getById(req.params.cardId);

    if (result instanceof Error && SQLErrors.NOT_FOUND_REGISTER) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(GenericErrors.RecordNotFound)
        );
    }
    if (result instanceof Error && SQLErrors.GENERIC_DB_ERROR) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(GenericErrors.InternalServerError)
        );
    }
    sendSuccessResponseList(res,StatusCodes.OK,result);
};
