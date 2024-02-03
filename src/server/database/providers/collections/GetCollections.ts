import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICollection } from '../../models';
import { IGetCollectionsProps } from '../types';

export const getCollections = async ({
    userId,
    page = 1,
    limit = 10
}: IGetCollectionsProps): Promise<{ collections: ICollection[] } | Error> => {
    try {
        const results = await Knex(ETableNames.collections)
            .select(
                `${ETableNames.collections}.*`,
                `${ETableNames.users}.username`,
                `${ETableNames.users}.phoneNumber`
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

        const collections: ICollection[] = results.map(collection => ({
            id: collection.id,
            userId: collection.userId,
            title: collection.title,
            description: collection.description,
            collectionType: collection.collectionType,
            isPublic: collection.isPublic === 1,
            isPublicPhoneNumber: collection.isPublicPhoneNumber === 1,
            createdAt: collection.createdAt,
            updatedAt: collection.updatedAt,
            userData: {
                username: collection.username,
                phoneNumber: collection.phoneNumber
            }
        }));

        return { collections };
    } catch (error) {
        console.error(error);
        return new Error('Erro ao obter coleções para o usuário');
    }
};
