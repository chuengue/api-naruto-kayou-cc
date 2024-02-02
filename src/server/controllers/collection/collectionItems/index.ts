import * as addItemToCollection from './AddItemCollection';
import * as getAllCollectionItems from './GetAllCollectionItems';
import * as modifyItemQuantity from './ModifyItemQuantity';
import * as removeItemToCollection from './RemoveItemCollection';

export const ItemCollectionControllers = {
    ...addItemToCollection,
    ...removeItemToCollection,
    ...getAllCollectionItems,
    ...modifyItemQuantity
};
