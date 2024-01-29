import { ProvidersErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IremoveItemProps } from '../types';

export const removeWishlistItem = async ({ userId, cardId }: IremoveItemProps): Promise<void | Error> => {
    try {
        const existingItem = await Knex(ETableNames.wishList)
            .where({
                userId: userId,
                cardId: cardId
            })
            .first();

        if (!existingItem) {
            return new Error(ProvidersErrors.NOT_EXIST_ITEM_WISHLIST);
        }
        await Knex(ETableNames.wishList)
            .where({
                userId: userId,
                cardId: cardId
            })
            .del();
    } catch (error) {
        console.error(error);
        return new Error('Erro ao remover item da lista de desejos');
    }
};
