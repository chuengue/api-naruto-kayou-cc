import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';

import * as yup from 'yup';
import { CardsProviders } from '../../database/providers/allCards';
import { IFilterListCardProps } from '../../database/providers/types';
import { GenericErrors, getErrorMessage, sendErrorResponse, sendSuccessResponseList } from '../../shared';
import { IGetAllCardsQueryProps } from './types';

const TGenericError = getErrorMessage('Errors.genericErrors');
const TCardError = getErrorMessage('Errors.cardsErrors');

export const getAllValidation = validation(getSchema => ({
    query: getSchema<IGetAllCardsQueryProps>(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0),
            name: yup.string().optional().min(1),
            code: yup.string().optional().min(1),
            box: yup.string().optional().min(1),
            rarity: yup.string().optional().min(1)
        })
    )
}));

export const getAll = async (req: Request<{}, {}, {}, IGetAllCardsQueryProps>, res: Response) => {
    const filters: IFilterListCardProps = {
        code: req.query.code || '',
        box: req.query.box || '',
        rarity: req.query.rarity || '',
        name: req.query.name || '',
        page: req.query.page || 1,
        limit: req.query.limit || 10
    };

    const result = await CardsProviders.getAll(filters);

    const count = await CardsProviders.count(filters);

    if (result instanceof Error) {
        return sendErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, TGenericError(1006));
    } else if (count instanceof Error) {
        return sendErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, TGenericError(GenericErrors.CountError));
    }
    if (result.length === 0) {
        return sendErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, TCardError(2001));
    }
    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', count);

    sendSuccessResponseList(res, StatusCodes.OK, result, count, req.query.page || 1, req.query.limit || 10);
};
