import { IAddItemCollection } from '../../database/providers/types';

export interface IAddItemCollectionProps
    extends Omit<IAddItemCollection, 'userId' | 'quantity'> {}

export interface IAddItemCollectionBody {
    cardQuantity?: number;
}
