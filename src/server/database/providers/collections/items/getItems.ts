import { SQLErrors } from '../../../../shared';
import { ETableNames } from '../../../ETableNames';
import { Knex } from '../../../knex';
import { iCard } from '../../../models';
import { IGetAllCollectionItem } from '../../types';

export const getAllCollectionItem = async ({
    collectionId,
    userId,
    name,
    code,
    rarity,
    box,
    page,
    limit
}: IGetAllCollectionItem): Promise<iCard[] | Error> => {
    console.log({ userId });
    try {
        let query = Knex(ETableNames.collectionsItems)
            .select(
                `${ETableNames.narutoCards}.*`,
                `${ETableNames.collectionsItems}.quantity`,
                `${ETableNames.collectionsItems}.createdAt`,
                `${ETableNames.collectionsItems}.updatedAt`
            )
            .join(
                ETableNames.narutoCards,
                `${ETableNames.collectionsItems}.cardId`,
                '=',
                `${ETableNames.narutoCards}.id`
            )
            .where(`${ETableNames.collectionsItems}.collectionId`, collectionId)
            .where(`${ETableNames.collectionsItems}.userId`, userId)
            .orderBy('createdAt', 'desc');
        if (name) {
            query = query.where(
                `${ETableNames.narutoCards}.name`,
                'like',
                `%${name}%`
            );
        }

        if (code) {
            query = query.where(
                `${ETableNames.narutoCards}.code`,
                'like',
                `%${code}%`
            );
        }

        if (rarity) {
            query = query.where(
                `${ETableNames.narutoCards}.rarity`,
                '=',
                rarity
            );
        }

        if (box) {
            query = query.where(
                `${ETableNames.narutoCards}.box`,
                'like',
                `%${box}%`
            );
        }

        const result = await query.offset((page - 1) * limit).limit(limit);

        if (!result.length) {
            return new Error(SQLErrors.NOT_FOUND_REGISTER);
        }

        return result;
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
