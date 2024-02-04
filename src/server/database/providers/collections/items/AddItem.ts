import { SQLErrors } from '../../../../shared';
import findExistingItemOrNotInCollection from '../../../../shared/utils/findExistingItemOrNotInCollection';
import { ETableNames } from '../../../ETableNames';
import { Knex } from '../../../knex';
import { IAddItemCollection } from '../../types';
import { IResultAddition } from './types';

export const addItemCollection = async ({
    userId,
    listCardsId,
    collectionId,
    quantity
}: IAddItemCollection): Promise<IResultAddition | Error> => {
    try {
        const itemsToAdd = await findExistingItemOrNotInCollection({
            userId,
            collectionId,
            listCardsId
        });
        if (itemsToAdd instanceof Error) {
            return new Error(
                'Erro ao verificar quais cards já estão cadastrados nessa coleção'
            );
        }
        const itemsPreExistents = itemsToAdd?.existingItems.length;
        const formattedItemsToAdd = itemsToAdd?.nonExistingItems.map(
            (cardId: string) => ({
                userId: userId,
                cardId: cardId,
                collectionId: collectionId,
                quantity: quantity || 1
            })
        );

        if (formattedItemsToAdd.length > 0) {
            await Knex(ETableNames.collectionsItems).insert(
                formattedItemsToAdd
            );
        }
        return {
            insertedItems: formattedItemsToAdd.length,
            notInsertedItems: itemsPreExistents
        };
    } catch (error: any) {
        console.error(error);
        if (error.code === 'ER_NO_REFERENCED_ROW_2' && error.errno === 1452) {
            return new Error(SQLErrors.NOT_FOUND_REGISTER);
        }
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
