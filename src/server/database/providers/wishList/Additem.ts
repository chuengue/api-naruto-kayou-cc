import { ProvidersErrors, SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IAddItemProps } from '../types';

export const addWishlistItem = async ({ userId, cardId }: IAddItemProps): Promise<void | Error> => {
    try {
        const existingItem = await Knex(ETableNames.wishList)
            .where({
                userId: userId,
                cardId: cardId
            })
            .first();

        if (existingItem) {
            return new Error(ProvidersErrors.ALREADY_EXISTS_WISHLIST);
        }

        await Knex(ETableNames.wishList).insert({
            userId: userId,
            cardId: cardId,
            createdAt: Knex.fn.now(),
            updatedAt: Knex.fn.now()
        });

        return;
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
