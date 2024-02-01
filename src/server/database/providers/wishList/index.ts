import * as addWishlistItem from './AddItem';
import * as getAllWishlistItemsForUser from './GetAll';
import * as removeWishlistItem from './RemoveItem';

export const WishListProviders = {
    ...addWishlistItem,
    ...getAllWishlistItemsForUser,
    ...removeWishlistItem
};
