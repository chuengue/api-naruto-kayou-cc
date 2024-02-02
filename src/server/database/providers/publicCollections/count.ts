import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IPublicCollectionsProps } from '../types';

export const count = async ({
    collectionName,
    author
}: IPublicCollectionsProps): Promise<number | Error> => {
    try {
        let query = Knex(ETableNames.collections)
            .count('* as count')
            .where('isPublic', true);

        if (author)
            query = query
                .innerJoin(
                    ETableNames.users,
                    `${ETableNames.collections}.userId`,
                    '=',
                    `${ETableNames.users}.id`
                )
                .andWhere(
                    `${ETableNames.users}.username`,
                    'like',
                    `%${author}%`
                );

        if (collectionName) query = query.andWhere('name', 'like', `%${name}%`);

        const [{ count }] = await query;

        if (Number.isInteger(Number(count))) {
            return Number(count);
        }

        return new Error('Erro ao consultar a quantidade total de registros');
    } catch (error) {
        console.error(error);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
};
