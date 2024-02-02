import {
    ProvidersErrors,
    ProvidersSuccessMessage,
    SQLErrors
} from '../../../../shared';
import { ETableNames } from '../../../ETableNames';
import { Knex } from '../../../knex';
import { IModifyQuantityItemProps } from '../../types';

export const modifyItemQuantity = async ({
    cardId,
    collectionId,
    newQuantity
}: IModifyQuantityItemProps): Promise<string | Error> => {
    try {
        const result = await Knex(ETableNames.collectionsItems)
            .where('collectionId', collectionId)
            .andWhere('cardId', cardId)
            .update({ quantity: newQuantity, updatedAt: Knex.fn.now() });
        if (result === 0) {
            return new Error(SQLErrors.NOT_FOUND_REGISTER);
        }

        return ProvidersSuccessMessage.SUCCESS_UPDATE;
    } catch (error) {
        console.error(error);
        return new Error(ProvidersErrors.FAILED_UPDATE);
    }
};
