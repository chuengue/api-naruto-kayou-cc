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
            .select('*')
            .where('userId', userId)
            .offset((page - 1) * limit)
            .limit(limit);

        // Converter isPublic de 0 ou 1 para true ou false
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
