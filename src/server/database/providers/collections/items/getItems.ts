import { ETableNames } from '../../../ETableNames';
import { Knex } from '../../../knex';
import { iCard } from '../../../models';
import { IGetAllCollectionItem } from '../../types';

export const getAllCollectionItem = async ({
    collectionId,
    name,
    code,
    rarity,
    box,
    page,
    limit
}: IGetAllCollectionItem): Promise<iCard[] | Error> => {
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

        return result;
    } catch (error) {
        console.error(error);
        return new Error('Erro ao obter itens dessa coleção');
    }
};
