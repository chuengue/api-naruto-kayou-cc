import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { IRarity } from '../../database/models';
import { RaritiesProviders } from '../../database/providers/rarities';
import { GenericErrors, getErrorMessage, sendErrorResponse, SQLErrors } from '../../shared';
import { validation } from '../../shared/middleware';

const TGenericErrors = getErrorMessage('Errors.genericErrors');

export const deleteValidation = validation(getSchema => ({
    params: getSchema<Pick<IRarity, 'id'>>(
        yup.object().shape({
            id: yup.string().required()
        })
    )
}));
export const deleteRarity = async (
    req: Request<Pick<IRarity, 'id'>>,
    res: Response
) => {
    console.log(req.params);
    try {

        await RaritiesProviders.deleteRarity(req.params.id as string);

        return res.sendStatus(StatusCodes.OK);
    } catch (error: any) {
        switch (error.message) {
            case 'OPERATION_NOT_ALLOWED':
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_REQUEST,
                    TGenericErrors(GenericErrors.OperationNotAllowed)
                );
            case SQLErrors.NOT_FOUND_REGISTER:
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_REQUEST,
                    TGenericErrors(GenericErrors.RecordNotFound)
                );

            default:
                return sendErrorResponse(
                    res,
                    StatusCodes.BAD_GATEWAY,
                    error.message
                );
        }
    }
};
