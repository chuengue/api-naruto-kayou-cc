import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IFilterListCardProps } from '../types';

export const count = async ({ rarity, box, code, name }: IFilterListCardProps): Promise<number | Error> => {
    try {
        const query = Knex(ETableNames.narutoCards).select('*');

        if (rarity) {
            query.andWhere('rarity', '=', rarity);
        }

        if (box) {
            query.andWhere('box', 'like', `%${box}%`);
        }

        if (code) {
            query.andWhere('code', 'like', `%${code}%`);
        }

        if (name) {
            query.andWhere('name', 'like', `%${name}%`);
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
