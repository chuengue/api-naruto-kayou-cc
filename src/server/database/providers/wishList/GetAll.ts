import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { iCard } from '../../models/card';

export const getAllWishlistItemsForUser = async (userId: string): Promise<iCard[]> => {
    try {
        const wishlistItems = await Knex(ETableNames.wishList)
            .select('*')
            .where('userId', userId);
        
        return wishlistItems;
    } catch (error) {
        console.error(error);
        throw new Error('Erro ao obter itens da wishlist para o usuário');
    }
};
