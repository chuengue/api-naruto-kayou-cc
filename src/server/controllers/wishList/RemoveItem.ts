import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { WishListProviders } from '../../database/providers/wishList';
import {
    getErrorMessage,
    ProvidersErrors,
    sendErrorResponse,
    SQLErrors,
    WishListErrors
} from '../../shared';
import { validation } from '../../shared/middleware';
import { IRemoveItemWishlistParams } from './types';

const TWishlistError = getErrorMessage('Errors.wishListErrors');

export const removeWishlistItemValidation = validation(getSchema => ({
    params: getSchema<IRemoveItemWishlistParams>(
        yup.object().shape({
            cardId: yup.string().required()
        })
    )
}));

export const removeWishlistItem = async (
    req: Request<IRemoveItemWishlistParams>,
    res: Response
) => {
    const addItemParams = {
        userId: req.headers.userId as string,
        cardId: req.params.cardId as string
    };
    const result = await WishListProviders.removeWishlistItem(addItemParams);

    if (result instanceof Error) {
        switch (result.message) {
            case ProvidersErrors.NOT_EXIST_ITEM_WISHLIST:
                return sendErrorResponse(
                    res,
                    StatusCodes.CONFLICT,
                    TWishlistError(WishListErrors.ItemNotExistingWishList)
                );

            case SQLErrors.GENERIC_DB_ERROR:
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_GATEWAY,
                    TWishlistError(WishListErrors.ErrorRemovingItemWishlist)
                );
            default:
                return sendErrorResponse(
                    res,
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    result.message
                );
        }
    }

    return sendErrorResponse(res, StatusCodes.OK, result);
};
