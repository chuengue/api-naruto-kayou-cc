import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICollection } from '../../models';
import { IGetCollectionsProps } from '../types';

export const getCollections = async ({
    userId,
    page = 1,
    limit = 10
}: IGetCollectionsProps): Promise<ICollection[] | Error> => {
    try {
        const collections = await Knex(ETableNames.collections)
            .select(
                `${ETableNames.collections}.*`,
                `${ETableNames.users}.username as author`
            )
            .join(
                ETableNames.users,
                `${ETableNames.collections}.userId`,
                '=',
                `${ETableNames.users}.id`
            )
            .where(`${ETableNames.collections}.userId`, userId)
            .orderBy('CreatedAt', 'desc')
            .offset((page - 1) * limit)
            .limit(limit);

        const modifiedCollections = collections.map(collection => ({
            ...collection,
            isPublic: collection.isPublic === 1 ? true : false
        }));

        return modifiedCollections;
    } catch (error) {
        console.error(error);
        return new Error('Erro ao obter coleções para o usuário');
    }
};
