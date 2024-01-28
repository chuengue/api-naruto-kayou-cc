import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';

import * as yup from 'yup';
import { CardsProviders } from '../../database/providers/allCards';
import { getErrorMessage, sendErrorResponse, sendSucessResponseList } from '../../shared';
import { IGetAllCardsQueryProps } from './types';

const TGenericError = getErrorMessage('Errors.genericErrors');
const TCardError = getErrorMessage('Errors.cardsErrors');


export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IGetAllCardsQueryProps>(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0),
            name: yup.string().optional().min(1),
            code: yup.string().optional().min(1),
            box: yup.string().optional().min(1),
            rarity: yup.string().optional().min(1),
        })
    ),
}));

export const getAll = async (
    req: Request<{}, {}, {}, IGetAllCardsQueryProps>,
    res: Response
) => {
    const result = await CardsProviders.getAll(
        req.query.page || 1,
        req.query.limit || 10,
        req.query.code || '',
        req.query.box || '',
        req.query.name || '',
        req.query.rarity || ''
    );

    const filters = {
        code: req.query.code || '',
        box: req.query.box || '',
        rarity: req.query.rarity || '',
        name: req.query.name || '',

    };

    const count = await CardsProviders.count(filters);

    if (result instanceof Error) {
        return sendErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, TGenericError(1006));
    } else if (count instanceof Error) {
        return sendErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, TCardError(2002));
    }
    if(result.length === 0 ){
        return sendErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, TCardError(2001));
    }
    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', count);

    sendSucessResponseList(res,StatusCodes.OK,result,count,req.query.page || 1, req.query.limit || 10);

    
};
