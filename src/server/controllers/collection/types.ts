import { ICollection } from '../../database/models';

export interface ICreateCollectionBodyProps extends Omit<ICollection, 'id' | 'createdAt' | 'updatedAt'> {}
