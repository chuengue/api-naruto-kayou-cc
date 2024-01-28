import { IWishList } from '../../database/models/WishList';

export interface IAddItemWishlistParamsProps extends Omit<IWishList, 'updatedAt' | 'createdAt' | 'userId'> {}
