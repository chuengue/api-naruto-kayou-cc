import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IPublicCollectionsProps } from '../types';

export const count = async ({ name, author }: IPublicCollectionsProps): Promise<number | Error> => {
    try {
        const query = Knex(ETableNames.collections).select('*').where('isPublic', true);

        if (author) {
            query.andWhere('author', 'like', `%${author}%`);
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
