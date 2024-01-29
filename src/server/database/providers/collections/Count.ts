import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const countCollections = async (userId: string): Promise<number | Error> => {
    try {
        const query = Knex(ETableNames.collections).select('*').where(`${ETableNames.collections}.userId`, userId);

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
