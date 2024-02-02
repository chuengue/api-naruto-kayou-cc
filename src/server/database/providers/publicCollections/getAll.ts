import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICollection } from '../../models';
import { IPublicCollectionsProps } from '../types';

export const getPublicCollections = async ({
    name,
    author,
    page = 1,
    limit = 6
}: IPublicCollectionsProps): Promise<
    { collections: ICollection[] } | Error
> => {
    try {
        let query = Knex(ETableNames.collections)
            .select(
                `${ETableNames.collections}.*`,
                `${ETableNames.users}.username as author`,
                Knex.raw(
                    `CASE WHEN ${ETableNames.collections}.showPhoneNumber = true THEN ${ETableNames.collections}.phoneNumber ELSE null END as phoneNumber`
                )
            )
            .where('isPublic', true)
            .join(ETableNames.users, 'collections.userId', '=', 'users.id')
            .orderBy('CreatedAt', 'desc');

        if (name) query = query.where('name', 'like', `%${name}%`);
        if (author)
            query = query.where(
                `${ETableNames.users}.username`,
                'like',
                `%${author}%`
            );

        const result = await query.offset((page - 1) * limit).limit(limit);

        return { collections: result };
    } catch (error) {
        console.error(error);
        throw new Error(SQLErrors.NOT_FOUND_REGISTER);
    }
};
