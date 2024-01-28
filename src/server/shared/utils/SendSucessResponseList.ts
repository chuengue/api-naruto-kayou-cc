import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const resolveItemsPerPage = (
    itemsPerPage: number | undefined,
    totalItems: number | undefined
): number | undefined => {
    if (totalItems && totalItems < 10) {
        return totalItems;
    }
    return itemsPerPage;
};

export const sendSucessResponseList = (
    res: Response,
    statusCode: StatusCodes,
    results: unknown,
    totalItems?: number | undefined,
    page?: number | undefined,
    itemsPerPage?: number | undefined
) => {
    return res.status(statusCode).json({
        totalItems: totalItems,
        itemsPerPage: resolveItemsPerPage(itemsPerPage, totalItems),
        page: page,
        results: results,
    });
};
