import { IAddItemCollection } from '../../../database/providers/types';

export interface IAddItemCollectionProps
    extends Omit<IAddItemCollection, 'userId' | 'quantity'> {}

export interface IAddItemCollectionBody {
    cardQuantity?: number;
}

export interface IGetAllCollectionItemsParams {
    collectionId?: string;
}

export interface IModifyQuantityItemCollectionBody {
    newQuantity?: number;
}

export interface IModifyQuantityItemCollectionParams {
    collectionId?: string;
    cardId?: string;
}
