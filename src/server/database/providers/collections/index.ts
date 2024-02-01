import * as count from './Count';
import * as create from './Create';
import * as deleteCollection from './Delete';
import * as getCollections from './GetCollections';
import * as updateCollection from './Update';
import * as addItemCollection from './items/AddItem';
import * as removeItemCollection from './items/RemoveItem';
import * as getAllCollectionItem from './items/getItems';
import * as modifyItemQuantity from './items/modifyItemQuantity';
export const CollectionProvider = {
    ...create,
    ...getCollections,
    ...count,
    ...deleteCollection,
    ...updateCollection,
    ...addItemCollection,
    ...addItemCollection,
    ...removeItemCollection,
    ...getAllCollectionItem,
    ...modifyItemQuantity
};
