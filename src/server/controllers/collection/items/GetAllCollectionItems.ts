import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ETableNames } from '../../../database/ETableNames';
import { CollectionProvider } from '../../../database/providers/collections';
import {
    GenericErrors,
    WishListErrors,
    getErrorMessage,
    sendErrorResponse,
    sendSuccessResponseList,
    validation
} from '../../../shared';
import { IGetAllCardsQueryProps } from '../../allCards/types';
import { CountersProviders } from './../../../database/providers/counters/index';
import { IGetAllCollectionItemsParams } from './types';
const TGenericError = getErrorMessage('Errors.genericErrors');
const TCardError = getErrorMessage('Errors.cardsErrors');
const TWishlistError = getErrorMessage('Errors.wishListErrors');

export const getAllCollectionItemsValidation = validation(getSchema => ({
    query: getSchema<IGetAllCardsQueryProps>(
        yup.object().shape({
            page: yup.number().optional().moreThan(0),
            limit: yup.number().optional().moreThan(0),
            name: yup.string().optional().min(1),
            code: yup.string().optional().min(1),
            box: yup.string().optional().min(1),
            rarity: yup.string().optional().min(1)
        })
    ),
    params: getSchema<IGetAllCollectionItemsParams>(
        yup.object().shape({
            collectionId: yup.string().required().length(36)
        })
    )
}));

export const getAllCollectionItems = async (
    req: Request<IGetAllCollectionItemsParams, {}, {}, IGetAllCardsQueryProps>,
    res: Response
) => {
    const getAllCollectionProps = {
        collectionId: req.params.collectionId as string,
        code: req.query.code || '',
        box: req.query.box || '',
        rarity: req.query.rarity || '',
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
