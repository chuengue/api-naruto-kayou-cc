import { ICollection } from '../../database/models';

export interface ICreateCollectionBodyProps extends Omit<ICollection, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateCollectionProps {
    collectionId: string;
    name?: string;
    description?: string;
    isPublic?: boolean;
}
