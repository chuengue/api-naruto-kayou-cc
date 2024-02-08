import { ProvidersErrors, SQLErrors } from '../../../../shared';
import { ETableNames } from '../../../ETableNames';
import { Knex } from '../../../knex';
import { IModifyQuantityItemProps } from '../../types';

export const modifyItemQuantity = async ({
    cardId,
    collectionId,
    newQuantity,
    userId
}: IModifyQuantityItemProps) => {
    try {
        const result = await Knex(ETableNames.collectionsItems)
            .where('collectionId', collectionId)
            .andWhere('userId', userId)
            .andWhere('cardId', cardId)
            .update({ quantity: newQuantity, updatedAt: Knex.fn.now() });
        if (result === 0) {
            throw new Error(SQLErrors.NOT_FOUND_REGISTER);
        }
    } catch (error) {
        console.error(error);
        throw new Error(ProvidersErrors.FAILED_UPDATE);
    }
};
