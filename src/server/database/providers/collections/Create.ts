import { ProvidersErrors, SQLErrors } from '../../../shared/enum/ErrorCodesSQL';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICollection } from '../../models';

export const create = async (
    collection: Omit<ICollection, 'id'>
): Promise<number | Error> => {
    try {
        const user = await Knex.select('phoneNumber')
            .from(ETableNames.users)
            .where('id', collection.userId)
            .first();

        if (!user) {
            return new Error(ProvidersErrors.FAILED_FETCH_INSERTED_COLLECTION);
        }

        const result = await Knex(ETableNames.collections).insert(collection);

        if (result) {
            const lastInsertedCollection = await Knex.select('id')
                .from(ETableNames.collections)
                .where('userId', collection.userId)
                .orderBy('createdAt', 'desc')
                .first();

            if (lastInsertedCollection) {
                return lastInsertedCollection.id;
            } else {
                return new Error(
                    ProvidersErrors.FAILED_FETCH_INSERTED_COLLECTION
                );
            }
        } else {
            return new Error(SQLErrors.GENERIC_DB_ERROR);
        }
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
