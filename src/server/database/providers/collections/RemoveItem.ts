import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IRemoveItemCollection } from '../types';

export const removeItemCollection = async ({
    collectionId,
    cardId
}: IRemoveItemCollection): Promise<string | Error> => {
    try {
        const existingItem = await Knex(ETableNames.collectionsItems)
            .where({
                collectionId: collectionId,
                cardId: cardId
            })
            .first();

        if (!existingItem) {
            return new Error(SQLErrors.NOT_FOUND_REGISTER);
        }
        await Knex(ETableNames.collectionsItems)
            .where({
                collectionId: collectionId,
                cardId: cardId
            })
            .del();
        return 'item excluído com sucesso';
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
