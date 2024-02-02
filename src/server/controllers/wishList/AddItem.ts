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
import { sendSuccessResponse } from '../../shared/utils/SendSuccessResponse';
import { IAddItemWishlistParams } from './types';

const TWishlistError = getErrorMessage('Errors.wishListErrors');

export const addWishlistItemValidation = validation(getSchema => ({
    params: getSchema<IAddItemWishlistParams>(
        yup.object().shape({
            cardId: yup.string().required()
        })
    )
}));

export const addWishlistItem = async (
    req: Request<IAddItemWishlistParams>,
    res: Response
) => {
    const addItemParams = {
        userId: req.headers.userId as string,
        cardId: req.params.cardId as string
    };
    const result = await WishListProviders.addWishlistItem(addItemParams);

    if (result instanceof Error) {
        switch (result.message) {
            case SQLErrors.GENERIC_DB_ERROR:
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_GATEWAY,
                    TWishlistError(WishListErrors.ErrorAddingItemWishlist)
                );

            case ProvidersErrors.ALREADY_EXISTS_WISHLIST:
                return sendErrorResponse(
                    res,
                    StatusCodes.CONFLICT,
                    TWishlistError(WishListErrors.AlreadyExistsWishlist)
                );
            default:
                return sendErrorResponse(
                    res,
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    result.message
                );
        }
    }

    return sendSuccessResponse(res, StatusCodes.OK, result);
};
