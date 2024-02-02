import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICollection } from '../../models';
import { IPublicCollectionsProps } from '../types';

export const getPublicCollections = async ({
    collectionName,
    author,
    page = 1,
    limit = 10
}: IPublicCollectionsProps): Promise<
    { collections: ICollection[] } | Error
> => {
    try {
        let query = Knex(ETableNames.collections)
            .select(
                `${ETableNames.collections}.*`,
                `${ETableNames.users}.username as author`,
                Knex.raw(
                    `CASE WHEN ${ETableNames.collections}.isPublicPhoneNumber = true THEN ${ETableNames.users}.phoneNumber ELSE null END as phoneNumber`
                )
            )
            .where('isPublic', true)
            .join(ETableNames.users, 'collections.userId', '=', 'users.id')
            .orderBy('CreatedAt', 'desc');

        if (collectionName)
            query = query.where('name', 'like', `%${collectionName}%`);
        if (author)
            query = query.where(
                `${ETableNames.users}.username`,
                'like',
                `%${author}%`
            );

        const result = await query.offset((page - 1) * limit).limit(limit);

        const collections = result.map(collection => ({
            id: collection.id,
            userId: collection.userId,
            name: collection.name,
            description: collection.description,
            title: collection.title,
            isPublic: collection.isPublic === 1,
            isPublicPhoneNumber: collection.isPublicPhoneNumber === 1,
            createdAt: collection.createdAt,
            updatedAt: collection.updatedAt,
            userData: {
                username: collection.author,
                phoneNumber: collection.phoneNumber
            }
        }));

        return { collections };
    } catch (error) {
        console.error(error);
        throw new Error(SQLErrors.NOT_FOUND_REGISTER);
    }
};
