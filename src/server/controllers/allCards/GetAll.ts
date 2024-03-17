import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { CardsProviders } from '../../database/providers/allCards';
import { IFilterListCardProps } from '../../database/providers/types';
import { GenericErrors, getErrorMessage, sendErrorResponse, sendSuccessResponseList } from '../../shared';
import { validation } from '../../shared/middleware';
import { IGetAllCardsBodyProps, IGetAllCardsQueryProps } from './types';

const TGenericError = getErrorMessage('Errors.genericErrors');
const TCardError = getErrorMessage('Errors.cardsErrors');

export const getAllValidation = validation(getSchema => ({
    body: getSchema(
        yup.object().shape({
            name: yup.string().optional(),
            code: yup.string().optional(),
            box: yup.mixed().optional(),
            rarity: yup.mixed().optional(),
            searchQuery: yup.string().optional()
        })
    ),
    query: getSchema(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0),
        })
        )
}));

export const getAll = async (
    req: Request<{}, {}, IGetAllCardsBodyProps, IGetAllCardsQueryProps >,
    res: Response
) => {

    const filters: IFilterListCardProps = {
        code: req.body.code || '',
        box: req.body.box,
        rarity: req.body.rarity,
        name: req.body.name || '',
        page: req.query.page || 1,
        limit: req.query.limit || 10,
        searchQuery: req.body.searchQuery || ''
    };
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
