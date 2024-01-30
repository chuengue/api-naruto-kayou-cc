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
            .select('collections.*', 'users.username as author')
            .where('isPublic', true)
            .join(ETableNames.users, 'collections.userId', '=', 'users.id');

        if (name) {
            query.where('name', 'like', `%${name}%`);
        }

        if (author) {
            query.where('code', 'like', `%${author}%`);
        }

        const result = await query.offset((page - 1) * limit).limit(limit);

        return result;
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.NOT_FOUND_REGISTER);
    }
};
