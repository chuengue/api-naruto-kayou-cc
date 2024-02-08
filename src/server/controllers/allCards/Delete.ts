import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { CardsProviders } from '../../database/providers/allCards';
import { sendErrorResponse } from '../../shared';
import { validation } from '../../shared/middleware';
import { DeleteCardParamProps } from './types';

export const deleteCardValidation = validation(getSchema => ({
    params: getSchema<DeleteCardParamProps>(
        yup.object().shape({
            cardId: yup.string().required()
        })
    )
}));

export const deleteCard = async (
    req: Request<{ cardId: string }>,
    res: Response
) => {
    try {
        await CardsProviders.deleteCard(req.params.cardId);
    } catch (error: any) {
        return sendErrorResponse(res, StatusCodes.BAD_GATEWAY, error.message);
    }
    return res.status(StatusCodes.OK).send();
};
