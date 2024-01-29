import { IAddItemProps, IremoveItemProps } from '../../database/providers/types';

export interface IAddItemWishlistParams extends Omit<IAddItemProps, 'userId'> {}

export interface IRemoveItemWishlistParams extends Omit<IremoveItemProps, 'userId'> {}
