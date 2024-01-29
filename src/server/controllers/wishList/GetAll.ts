import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { WishListProviders } from './../../database/providers/wishList/index';

import { validation } from '../../shared/middleware';

import * as yup from 'yup';
import { IGetWishListProps } from '../../database/providers/types';
import {
    GenericErrors,
    WishListErrors,
    getErrorMessage,
    sendErrorResponse,
    sendSuccessResponseList,
} from '../../shared';
import { IGetAllCardsQueryProps } from '../allCards/types';

const TGenericError = getErrorMessage('Errors.genericErrors');
const TCardError = getErrorMessage('Errors.cardsErrors');
const TWishlistError= getErrorMessage('Errors.wishListErrors');



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
    const wishListGetProps: IGetWishListProps = {
        code: req.query.code || '',
        box: req.query.box || '',
        rarity: req.query.rarity || '',
        name: req.query.name || '',
        page: req.query.page || 1,
        limit: req.query.limit || 10,
        userId: req.headers.userId as string,
    };

    const result = await WishListProviders.getAllWishlistItemsForUser(
        wishListGetProps
    );

    const count = await WishListProviders.countWishListItems(wishListGetProps);

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
    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', count);

    sendSuccessResponseList(
        res,
        StatusCodes.OK,
        result,
        count,
        req.query.page || 1,
        req.query.limit || 10
    );
};
