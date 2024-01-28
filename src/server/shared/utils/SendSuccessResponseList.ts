import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { SuccessListResponse } from './types';


const resolveItemsPerPage = (
    itemsPerPage: number | undefined,
    totalItems: number | undefined
): number | undefined => {
    if (totalItems !== undefined && totalItems < 10) {
        return totalItems;
    }
    return itemsPerPage;
};

export const sendSuccessResponseList = (
    res: Response,
    statusCode: StatusCodes,
    results: unknown,
    totalItems?: number,
    page?: number,
    itemsPerPage?: number
): void => {
    let response: SuccessListResponse = {
        results: results,
    };

    if (totalItems !== undefined && itemsPerPage !== undefined && page !== undefined) {
        response = {
            ...response,
            totalItems: totalItems,
            itemsPerPage: resolveItemsPerPage(itemsPerPage, totalItems),
            totalPages: Math.ceil(totalItems / itemsPerPage),
            page: page,
        };
    }

    res.status(statusCode).json(response);
};
