import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { CardsProviders } from '../../database/providers/allCards';
import { IFilterListCardProps } from '../../database/providers/types';
import { GenericErrors, getErrorMessage, sendErrorResponse, sendSuccessResponseList } from '../../shared';
import { validation } from '../../shared/middleware';
import { IGetAllCardsQueryProps } from './types';

const TGenericError = getErrorMessage('Errors.genericErrors');
const TCardError = getErrorMessage('Errors.cardsErrors');

export const getAllValidation = validation(getSchema => ({
    query: getSchema<IGetAllCardsQueryProps>(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0),
            name: yup.string().optional(),
            code: yup.string().optional(),
            box: yup.string().optional(),
            rarity: yup.string().optional()
        })
    )
}));

export const getAll = async (
    req: Request<{}, {}, {}, IGetAllCardsQueryProps>,
    res: Response
) => {
    const filters: IFilterListCardProps = {
        code: req.query.code || '',
        box: req.query.box || '',
        rarity: req.query.rarity || '',
        name: req.query.name || '',
        page: req.query.page || 1,
        limit: req.query.limit || 10
    };
    console.log(!!req.query.code);
    const result = await CardsProviders.getAll(filters);

    const count = await CardsProviders.count(filters);

    if (result instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(1006)
        );
    }
    if (count instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(GenericErrors.CountError)
        );
    }
    if (result.length === 0) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TCardError(2001)
        );
    }

    sendSuccessResponseList(
        res,
        StatusCodes.OK,
        result,
        count,
        req.query.page || 1,
        req.query.limit || 10
    );
};
