import * as addWishlistItem from './Additem';
import * as countWishListItems from './Count';
import * as getAllWishlistItemsForUser from './GetAll';
import * as removeWishlistItem from './RemoveItem';

export const WishListProviders = {
    ...addWishlistItem,
    ...getAllWishlistItemsForUser,
    ...removeWishlistItem,
    ...countWishListItems
};
