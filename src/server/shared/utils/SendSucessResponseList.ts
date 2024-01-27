import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

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
        itemsPerPage: itemsPerPage,
        page: page,
        results: results,
    });
};
