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
    limit,
}: IGetWishListProps): Promise<iCard[] | Error> => {
    try {
        let query = Knex(ETableNames.wishList)
            .select(`${ETableNames.narutoCards}.*`)
            .join(
                ETableNames.narutoCards,
                `${ETableNames.wishList}.cardId`,
                '=',
                `${ETableNames.narutoCards}.id`
            )
            .where(`${ETableNames.wishList}.userId`, userId);
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

        if (rarity) {
            query = query.where(
                `${ETableNames.narutoCards}.rarity`,
                '=',
                rarity
            );
        }

        if (box) {
            query = query.where(
                `${ETableNames.narutoCards}.box`,
                'like',
                `%${box}%`
            );
        }

        const result = await query.offset((page - 1) * limit).limit(limit);

        return result;
    } catch (error) {
        console.error(error);
        return new Error('Erro ao obter itens da wishlist para o usuário');
    }
};
