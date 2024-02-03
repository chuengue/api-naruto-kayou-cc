import { ICollection } from '../../database/models';

export interface ICreateCollectionBodyProps
    extends Omit<ICollection, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateCollectionProps {
    collectionId: string;
    title?: string;
    description?: string;
    isPublic?: boolean;
    collectionType?: number;
}
