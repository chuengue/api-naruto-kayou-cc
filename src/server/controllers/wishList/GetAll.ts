import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { ETableNames } from '../../database/ETableNames';
import { CountersProviders } from '../../database/providers/counters';
import { GenericErrors, getErrorMessage, sendErrorResponse, sendSuccessResponseList, WishListErrors } from '../../shared';
import { validation } from '../../shared/middleware';
import { IGetAllCardsQueryProps } from '../allCards/types';
import { WishListProviders } from './../../database/providers/wishList/index';

const TGenericError = getErrorMessage('Errors.genericErrors');
const TCardError = getErrorMessage('Errors.cardsErrors');
const TWishlistError = getErrorMessage('Errors.wishListErrors');

export const getAllValidation = validation(getSchema => ({
    query: getSchema(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0),
            name: yup.string().optional(),
            code: yup.string().optional(),
            box: yup.mixed().optional(),
            rarity: yup.mixed().optional(),
            searchQuery: yup.string().optional()
        })
    )
}));

export const getAll = async (
    req: Request<{}, {}, {}, IGetAllCardsQueryProps>,
    res: Response
) => {
    const boxes = req.query.box;
    const boxesArray: string[] = Array.isArray(boxes) ? boxes : (typeof boxes === 'string' ? [boxes] : []);
    const filteredBoxes = boxesArray.filter(box => box.trim() !== '');

    const rarities = req.query.rarity;
    const raritiesArray: string[] = Array.isArray(rarities) ? rarities : (typeof rarities === 'string' ? [rarities] : []);
    const filteredRarities = raritiesArray.filter(rarity => rarity.trim() !== '');

    const wishListGetProps = {
        code: req.query.code || '',
        box: filteredBoxes,
        rarity: filteredRarities,
        name: req.query.name || '',
        page: req.query.page || 1,
        limit: req.query.limit || 10,
        searchQuery: req.query.searchQuery || '',
        userId: req.headers.userId as string
    };

    const result =
        await WishListProviders.getAllWishlistItemsForUser(wishListGetProps);

    const count = await CountersProviders.countCardsWithJoinAndFilters(
        ETableNames.wishList,
        { userId: wishListGetProps.userId as string },
        wishListGetProps
    );

    if (result instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TWishlistError(WishListErrors.ErrorGetWishlist)
        );
    } else if (count instanceof Error) {
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
