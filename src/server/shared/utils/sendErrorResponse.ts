import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const sendErrorResponse = (res: Response, statusCode: StatusCodes, error: any) => {
    return res.status(statusCode).json({
        errors: {
            error
        }
    });
};
