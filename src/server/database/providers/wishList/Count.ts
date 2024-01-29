import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IGetWishListProps } from '../types';

export const countWishListItems = async ({
    userId,
    box,
    code,
    rarity,
    name
}: IGetWishListProps): Promise<number | Error> => {
    try {
        const query = Knex(ETableNames.wishList)
            .join(ETableNames.narutoCards, `${ETableNames.wishList}.cardId`, '=', `${ETableNames.narutoCards}.id`)
            .select(ETableNames.narutoCards + '.*')
            .where(`${ETableNames.wishList}.userId`, userId);

        if (rarity) {
            query.andWhere(`${ETableNames.narutoCards}.rarity`, '=', rarity);
        }

        if (box) {
            query.andWhere(`${ETableNames.narutoCards}.box`, 'like', `%${box}%`);
        }

        if (code) {
            query.andWhere(`${ETableNames.narutoCards}.code`, 'like', `%${code}%`);
        }

        if (name) {
            query.andWhere(`${ETableNames.narutoCards}.name`, 'like', `%${name}%`);
        }

        const [{ count }] = await query.count<[{ count: number }]>('* as count');

        if (Number.isInteger(Number(count))) {
            return Number(count);
        }

        return new Error('Erro ao consultar a quantidade total de registros');
    } catch (error) {
        console.error(error);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
};
