import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IFilterListCardProps } from '../types';

export const count = async ({
    rarity,
    box,
    code,
    name,
    searchQuery

}: IFilterListCardProps): Promise<number | Error> => {
    try {
        let query = Knex(ETableNames.narutoCards).count('* as count');

        if (rarity) query = query.andWhere('rarity', '=', rarity);
        if (box) query = query.andWhere('box', 'like', `%${box}%`);
        if (code) query = query.andWhere('code', 'like', `%${code}%`);
        if (name) query = query.andWhere('name', 'like', `%${name}%`);
        if (searchQuery && searchQuery.trim() !== '') {
            query = query.where(function() {
                this.where('name', 'like', `%${searchQuery}%`)
                    .orWhere('code', 'like', `%${searchQuery}%`);
            });
        }

        const [{ count }] = await query;

        if (Number.isInteger(Number(count))) return Number(count);

        return new Error('Erro ao consultar a quantidade total de registros');
    } catch (error) {
        console.error(error);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
};
