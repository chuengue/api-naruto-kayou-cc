import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IPublicCollectionsProps } from '../types';

export const count = async ({
    searchQuery
}: IPublicCollectionsProps): Promise<number | Error> => {
    try {
        let query = Knex(ETableNames.collections)
            .count('* as count')
            .where('isPublic', true);

        if (searchQuery === '' || searchQuery === null || searchQuery === undefined) {
            query = query.andWhere(function() {
                this.where('title', 'like', `%${searchQuery}%`)
                    .orWhereExists(function() {
                        this.select('*')
                            .from(ETableNames.users)
                            .whereRaw(
                                `${ETableNames.collections}.userId = ${ETableNames.users}.id AND ${ETableNames.users}.username like '%${searchQuery}%'`
                            );
                    });
            });
        }else {
            query = query.where('isPublic', true);
        }

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
