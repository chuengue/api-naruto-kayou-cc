import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICollection } from '../../models';
import { IPublicCollectionsProps } from '../types';

export const getPublicCollections = async ({
    name,
    author,
    page = 1,
    limit = 10
}: IPublicCollectionsProps): Promise<ICollection[] | Error> => {
    try {
        const query = Knex(ETableNames.collections)
            .select(
                `${ETableNames.collections}.*`,
                `${ETableNames.users}.username as author`,
                Knex.raw(
                    `CASE WHEN ${ETableNames.collections}.showPhoneNumber = true THEN ${ETableNames.collections}.phoneNumber END as phoneNumber`
                )
            )
            .where('isPublic', true)
            .join(ETableNames.users, 'collections.userId', '=', 'users.id')
            .orderBy('CreatedAt', 'desc');

        if (name) {
            query.where('name', 'like', `%${name}%`);
        }

        if (author) {
            query.where('code', 'like', `%${author}%`);
        }

        const result = await query.offset((page - 1) * limit).limit(limit);

        const modifiedResult: ICollection[] = result.map(collection => ({
            ...collection,
            isPublic: collection.isPublic === 1 ? true : false,
            showPhoneNumber: collection.showPhoneNumber === 1 ? true : false
        }));

        return modifiedResult;
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.NOT_FOUND_REGISTER);
    }
};
