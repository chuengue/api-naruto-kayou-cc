import { validation } from '../../shared/middleware';

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { WishListProviders } from '../../database/providers/wishList';
import {
    ProvidersErrors,
    SQLErrors,
    WishListErrors,
    getErrorMessage,
    sendErrorResponse
} from '../../shared';
import { IAddItemWishlistParamsProps } from './types';

const TWishlistError= getErrorMessage('Errors.wishListErrors');

export const addWishlistItemValidation = validation((getSchema) => ({
    params: getSchema<IAddItemWishlistParamsProps>(
        yup.object().shape({
            cardId: yup.string().required()
            
        })
    ),
}));

export const addWishlistItem = async (
    req: Request<IAddItemWishlistParamsProps>,
    res: Response
) => {
    const addItemParams = {
        userId : req.headers.userId as string,
        cardId: req.params.cardId as string
    };
    const result = await WishListProviders.addWishlistItem(addItemParams);

    if (
        result instanceof Error &&
        result.message === SQLErrors.GENERIC_DB_ERROR
    ) {
        return sendErrorResponse(
            res,
            StatusCodes.BAD_GATEWAY,
            TWishlistError(WishListErrors.ErrorAddingItemWishlist)
        );
    }
    if (
        result instanceof Error &&
        result.message === ProvidersErrors.ALREADY_EXISTS_WISHLIST
    ) {
        return sendErrorResponse(
            res,
            StatusCodes.CONFLICT,
            TWishlistError(WishListErrors.AlreadyExistsWishlist)
        );
    }

    if (result instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            result.message
        );
    }

    return res.status(StatusCodes.NO_CONTENT).json(result);
};
