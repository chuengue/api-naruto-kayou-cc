import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const addWishlistItem = async (
    userId: string | undefined,
    cardId: string
): Promise<void | Error> => {
    try {
        await Knex(ETableNames.wishList).insert({
            userId: userId,
            cardId: cardId,
        });
    } catch (error) {
        console.error(error);
        return new Error('Erro ao adicionar item à lista de desejos');
    }
};
