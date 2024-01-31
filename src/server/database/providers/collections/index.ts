import * as addItemCollection from './AddItem';
import * as count from './Count';
import * as create from './Create';
import * as deleteCollection from './Delete';
import * as getCollections from './GetCollections';
import * as removeItemCollection from './RemoveItem';
import * as updateCollection from './Update';
export const CollectionProvider = {
    ...create,
    ...getCollections,
    ...count,
    ...deleteCollection,
    ...updateCollection,
    ...addItemCollection,
    ...addItemCollection,
    ...removeItemCollection
};
