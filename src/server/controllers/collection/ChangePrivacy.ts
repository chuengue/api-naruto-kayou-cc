import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { CollectionProvider } from '../../database/providers/collections';
import { IChangePrivacyProps } from '../../database/providers/types';
import { sendErrorResponse, validation } from '../../shared';
import { sendSuccessResponse } from '../../shared/utils/SendSuccessResponse';

export const changeCollectionValidation = validation(getSchema => ({
    query: getSchema<Omit<IChangePrivacyProps, 'userId'>>(
        yup.object().shape({
            newPrivacy: yup.number().required().max(1).min(0),
            collectionId: yup.string().required().length(36)
        })
    )
}));

export const changeCollectionPrivacy = async (
    req: Request<{}, {}, {}, Partial<IChangePrivacyProps>>,
    res: Response
) => {
    const updateProps: IChangePrivacyProps = {
        userId: req.headers.userId as string,
        collectionId: req.query.collectionId as string,
        newPrivacy: Number(req.query.newPrivacy)
    };

    try {
        await CollectionProvider.changePrivacy(updateProps);
    } catch (error: any) {
        return sendErrorResponse(
            res,
            StatusCodes.BAD_REQUEST,
            'Erro ao atualizar privacidade'
        );
    }

    return sendSuccessResponse(res, StatusCodes.OK, 'CREATED');
};
