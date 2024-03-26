import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { ETableNames } from '../../../database/ETableNames';
import { CollectionProvider } from '../../../database/providers/collections';
import { CountersProviders } from '../../../database/providers/counters/index';
import { GenericErrors, getErrorMessage, sendErrorResponse, sendSuccessResponseList, SQLErrors, validation, WishListErrors } from '../../../shared';
import { IGetAllCollectionItemsParams, IGetItemCollectionQuery } from './types';

const TGenericError = getErrorMessage('Errors.genericErrors');
const TWishlistError = getErrorMessage('Errors.wishListErrors');

export const getAllCollectionItemsValidation = validation(getSchema => ({
    query: getSchema(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0),
            name: yup.string().optional().min(1),
            code: yup.string().optional().min(1),
            box: yup.mixed().optional(),
            rarity: yup.mixed().optional(),
            searchQuery: yup.string().optional()
        })
    ),
    params: getSchema<IGetAllCollectionItemsParams>(
        yup.object().shape({
            collectionId: yup.string().required().length(36)
        })
    )
}));

export const getAllCollectionItems = async (
    req: Request<IGetAllCollectionItemsParams, {}, {}, IGetItemCollectionQuery>,
    res: Response
) => {
    const boxes = req.query.box;
    const boxesArray: string[] = Array.isArray(boxes) ? boxes : (typeof boxes === 'string' ? [boxes] : []);
    const filteredBoxes = boxesArray.filter(box => box.trim() !== '');

    const rarities = req.query.rarity;
    const raritiesArray: string[] = Array.isArray(rarities) ? rarities : (typeof rarities === 'string' ? [rarities] : []);
    const filteredRarities = raritiesArray.filter(rarity => rarity.trim() !== '');

    const getAllCollectionProps = {
        collectionId: req.params.collectionId as string,
        userId: req.headers.userId as string,
        code: req.query.code || '',
        box: filteredBoxes,
        rarity: filteredRarities,
        name: req.query.name || '',
        page: req.query.page || 1,
        limit: req.query.limit || 10
    };

    const result = await CollectionProvider.getAllCollectionItem(
        getAllCollectionProps
    );

    const count = await CountersProviders.countCardsWithJoinAndFilters(
        ETableNames.collectionsItems,
        { collectionId: req.params.collectionId as string },
        getAllCollectionProps
    );

    if (result instanceof Error) {
        switch (result.message) {
            case SQLErrors.GENERIC_DB_ERROR:
                return sendErrorResponse(
                    res,
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    TWishlistError(WishListErrors.ErrorGetWishlist)
                );
            case SQLErrors.NOT_FOUND_REGISTER:
                return sendErrorResponse(
                    res,
                    StatusCodes.NOT_FOUND,
                    TWishlistError(WishListErrors.ItemNotExistingWishList)
                );
            default:
                return sendErrorResponse(
                    res,
                    StatusCodes.INTERNAL_SERVER_ERROR,
                    TWishlistError(WishListErrors.ErrorGetWishlist)
                );
        }
    }
    if (count instanceof Error) {
        return sendErrorResponse(
            res,
            StatusCodes.INTERNAL_SERVER_ERROR,
            TGenericError(GenericErrors.CountError)
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
