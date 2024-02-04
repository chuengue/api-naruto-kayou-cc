import { Request, Response } from 'express';
import { ETableNames } from '../../database/ETableNames';
import { ICollection, iCard } from '../../database/models';
import { lackingProviders } from '../../database/providers/lacking';
import { IGetAllCollectionItem } from '../../database/providers/types';
import { CollectionProvider } from './../../database/providers/collections/index';
interface CollectionFilters extends IGetAllCollectionItem {
    collectionId: string;
}

export const getAllCollections = async (
    filters: CollectionFilters
): Promise<iCard[] | Error> => {
    return CollectionProvider.getAllCollectionItem(filters);
};

export const createLackingCollectionService = async (
    collection: Omit<ICollection, 'id'>
): Promise<unknown | Error> => {
    const result = await CollectionProvider.create(collection);
    return result;
};

const listCollectionCards = async (collectionId: string): Promise<string[]> => {
    const filters: CollectionFilters = {
        collectionId,
        code: '',
        box: '',
        rarity: '',
        name: '',
        page: 1,
        limit: 99999
    };

    try {
        const cardsCollectionList = await getAllCollections(filters);

        if (cardsCollectionList instanceof Error) {
            throw Error('Erro ao consulta list de cards na coleção');
        }
        const idsArray = cardsCollectionList.map(({ id }) => id);
        return idsArray;
    } catch (error) {
        console.error('Erro ao listar os cartões da coleção:', error);
        throw error;
    }
};

export const findLackingCards = async (
    collectionId: string,
    comparisonTable: string
) => {
    try {
        const collectionCards = await listCollectionCards(collectionId);

        const lackingList = await lackingProviders.findLackingCards(
            comparisonTable,
            'id',
            collectionCards
        );
        if (lackingList instanceof Error) {
            throw Error('Erro ao gerar lista');
        }
        const idsArray = lackingList.map(({ id }) => id);
        return idsArray;
    } catch (error) {
        console.error('Erro ao com arar:', error);
    }
};
export const createLackingCollection = async (
    req: Request<{ collectionId: string }, {}, { title: string }>,
    res: Response
) => {
    await findLackingCards(req.params.collectionId, ETableNames.narutoCards);
    const userId = req.headers.userId as string;

    const createCollection = await createLackingCollectionService({
        title: req.body.title,
        collectionType: 2,
        userId: userId
    });
    res.send(createCollection);
    return createCollection;
};
