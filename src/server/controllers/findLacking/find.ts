import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ETableNames } from '../../database/ETableNames';
import { iCard } from '../../database/models';
import { lackingProviders } from '../../database/providers/lacking';
import { IGetAllCollectionItem } from '../../database/providers/types';
import { sendErrorResponse } from '../../shared';
import { sendSuccessResponse } from '../../shared/utils/SendSuccessResponse';
import { CollectionProvider } from './../../database/providers/collections/index';
interface getAllCollectionsItemsProps extends IGetAllCollectionItem {
    collectionId: string;
}

export const getAllCollectionsItems = async (
    filters: getAllCollectionsItemsProps
): Promise<iCard[] | Error> => {
    return CollectionProvider.getAllCollectionItem(filters);
};

const listCollectionCards = async (collectionId: string): Promise<string[]> => {
    const filters: getAllCollectionsItemsProps = {
        collectionId,
        page: 1,
        limit: 99999
    };
    const cardsCollectionList = await getAllCollectionsItems(filters);

    if (cardsCollectionList instanceof Error) {
        throw Error('Erro ao consulta list de cards na coleção');
    }

    return cardsCollectionList.map(({ id }) => id);
};

export const findLackingCards = async (
    collectionId: string,
    comparisonTable: string
): Promise<string[]> => {
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
        return lackingList.map(({ id }) => id);
    } catch (error) {
        throw Error('Erro ao gerar lista');
    }
};

export const createLackingCollection = async (
    req: Request<{ collectionId: string }, {}, { title: string }>,
    res: Response
) => {
    try {
        const userId = req.headers.userId as string;

        const listCardsId = await findLackingCards(
            req.params.collectionId,
            ETableNames.narutoCards
        );

        const newCollection = await CollectionProvider.create({
            title: req.body.title,
            collectionType: 2,
            userId: userId
        });

        const addItemsToNewCollection =
            await CollectionProvider.addItemCollection({
                userId,
                listCardsId,
                collectionId: String(newCollection)
            });

        sendSuccessResponse(res, StatusCodes.OK, {
            addItemsToNewCollection,
            newCollectionId: newCollection
        });
    } catch (error: any) {
        sendErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, error);
    }
};
