import { ProvidersErrors, SQLErrors } from '../../../../shared';
import { ETableNames } from '../../../ETableNames';
import { Knex } from '../../../knex';
import { IAddItemCollection } from '../../types';

export const addItemCollection = async ({
    userId,
    cardId,
    collectionId,
    quantity
}: IAddItemCollection): Promise<string | Error> => {
    try {
        const existingItem = await Knex(ETableNames.collectionsItems)
            .where({
                userId: userId,
                cardId: cardId,
                collectionId: collectionId
            })
            .first();

        if (existingItem) {
            return new Error(ProvidersErrors.ALREADY_EXISTS_IN_COLLECTION);
        }
        await Knex(ETableNames.collectionsItems).insert({
            userId: userId,
            cardId: cardId,
            collectionId: collectionId,
            quantity: quantity || 1
        });

        return 'Item adicionado a coleção com sucessos';
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
