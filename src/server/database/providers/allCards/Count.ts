import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';


export const count = async (filters: { [key: string]: string }): Promise<number | Error> => {

    try {
        const query = Knex(ETableNames.narutoCards)
            .select('*');

        if (filters.rarity) {
            query.andWhere('rarity', '=', filters.rarity);
        }

        if (filters.box) {
            query.andWhere('box', 'like', `%${filters.box}%`);
        }

        if (filters.code) {
            query.andWhere('code', 'like', `%${filters.code}%`);
        }

        if (filters.name) {
            query.andWhere('name', 'like', `%${filters.name}%`);
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
