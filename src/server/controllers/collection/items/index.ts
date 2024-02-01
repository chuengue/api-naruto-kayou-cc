import * as addItemToCollection from './AddItem';
import * as getAllCollectionItems from './GetAllCollectionItems';
import * as removeItemToCollection from './RemoveItem';
export const ItemCollectionControllers = {
    ...addItemToCollection,
    ...removeItemToCollection,
    ...getAllCollectionItems
};
