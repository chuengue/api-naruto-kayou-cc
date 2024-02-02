import * as count from './Count';
import * as create from './Create';
import * as deleteCollection from './Delete';
import * as getCollections from './GetCollections';
import * as updateCollection from './Update';
import * as addItemCollection from './items/AddItem';
import * as getAllCollectionItem from './items/GetItems';
import * as modifyItemQuantity from './items/ModifyItemQuantity';
import * as removeItemCollection from './items/RemoveItem';
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
