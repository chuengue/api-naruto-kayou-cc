import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { iCard } from '../../models/card';
import { IGetWishListProps } from '../types';

export const getAllWishlistItemsForUser = async ({
    userId,
    name,
    code,
    rarity,
    box,
    page,
    limit
}: IGetWishListProps): Promise<iCard[] | Error> => {
    try {
        let query = Knex(ETableNames.wishList)
            .select(
                `${ETableNames.narutoCards}.*`,
                `${ETableNames.wishList}.createdAt`,
                `${ETableNames.wishList}.updatedAt`
            )
            .join(
                ETableNames.narutoCards,
                `${ETableNames.wishList}.cardId`,
                '=',
                `${ETableNames.narutoCards}.id`
            )
            .where(`${ETableNames.wishList}.userId`, userId)
            .orderBy('createdAt', 'desc');
        if (name) {
            query = query.where(
                `${ETableNames.narutoCards}.name`,
                'like',
                `%${name}%`
            );
        }
        if (code) {
            query = query.where(
                `${ETableNames.narutoCards}.code`,
                'like',
                `%${code}%`
            );
        }     
        if (rarity && rarity.length > 0) {
            query = query.whereIn(`${ETableNames.narutoCards}.rarity`, rarity);
        }
        
        if (box && box.length > 0) {
            query = query.whereIn(`${ETableNames.narutoCards}.box`, box);
        }

        const result = await query.offset((page - 1) * limit).limit(limit);

        return result;
    } catch (error) {
        console.error(error);
        return new Error('Erro ao obter itens da wishlist para o usuário');
    }
};
