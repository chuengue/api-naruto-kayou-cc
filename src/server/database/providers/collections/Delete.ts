import { ProvidersErrors, SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IDeleteCollectionProps } from '../types';

export const deleteCollection = async ({ userId, collectionId }: IDeleteCollectionProps): Promise<void | Error> => {
    try {
        const collection = await Knex(ETableNames.collections)
            .where({
                userId: userId,
                id: collectionId
            })
            .first();

        if (!collection) {
            return new Error(ProvidersErrors.COLLECTION_UNAUTHORIZED);
        }

        await Knex(ETableNames.collections)
            .where({
                userId: userId,
                id: collectionId
            })
            .del();

        console.log(`Coleção ${collectionId} excluída com sucesso.`);
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
