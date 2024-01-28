import * as addWishlistItem from './Additem';
import * as getAll from './GetAll';
import * as removeWishlistItem from './RemoveItem';



export const WishListProviders = {
    ...addWishlistItem,
    ...getAll,
    ...removeWishlistItem
};

