import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IFilterListCardProps } from '../types';

export const countCardsWithJoinAndFilters = async (
    mainTableName: string,
    whereParam: Record<string, string>,
    { box, code, rarity, name , searchQuery}: IFilterListCardProps
): Promise<number | Error> => {
    try {
        const query = Knex(mainTableName)
            .join(
                ETableNames.narutoCards,
                `${mainTableName}.cardId`,
                '=',
                `${ETableNames.narutoCards}.id`
            )
            .select(ETableNames.narutoCards + '.*')
            .where(whereParam);

        if (rarity) {
            query.andWhere(`${ETableNames.narutoCards}.rarity`, '=', rarity);
        }

        if (box) {
            query.andWhere(
                `${ETableNames.narutoCards}.box`,
                'like',
                `%${box}%`
            );
        }

        if (code) {
            query.andWhere(
                `${ETableNames.narutoCards}.code`,
                'like',
                `%${code}%`
            );
        }

        if (name) {
            query.andWhere(
                `${ETableNames.narutoCards}.name`,
                'like',
                `%${name}%`
            );
        }
        
        if (searchQuery && searchQuery.trim() !== '') {
            query.where(function() {
                this.where('name', 'like', `%${searchQuery}%`)
                    .orWhere('code', 'like', `%${searchQuery}%`);
            });
        }

        const [{ count }] =
            await query.count<[{ count: number }]>('* as count');

        if (Number.isInteger(Number(count))) {
            return Number(count);
        }

        return new Error('Erro ao consultar a quantidade total de registros');
    } catch (error) {
        console.error(error);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
};
