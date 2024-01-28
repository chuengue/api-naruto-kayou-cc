import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const removeWishlistItem = async (userId: string, cardId: string): Promise<void> => {
    try {
        await Knex(ETableNames.wishList)
            .where({
                userId: userId,
                cardId: cardId,
            })
            .del();
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao remover item da lista de desejos');
    }
};
