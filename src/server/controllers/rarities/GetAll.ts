import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { RaritiesProviders } from '../../database/providers/rarities';
import { GenericErrors, getErrorMessage, sendErrorResponse, sendSuccessResponseList } from '../../shared';
import { IGetAllCardsQueryProps } from '../allCards/types';

const TGenericError = getErrorMessage('Errors.genericErrors');

export const getAllRarities = async (
    req: Request<{}, {}, {}, IGetAllCardsQueryProps>,
    res: Response
) => {
    const result =
        await RaritiesProviders.getAllRarities();

    if (result instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(GenericErrors.DatabaseConnectionError)
        );
    } 
    if (result.length === 0) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(GenericErrors.DatabaseConnectionError)
        );
    }

    sendSuccessResponseList(
        res,
        StatusCodes.OK,
        result
    );
};
