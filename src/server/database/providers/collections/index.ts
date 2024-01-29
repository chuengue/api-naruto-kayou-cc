import * as count from './Count';
import * as create from './Create';
import * as deleteCollection from './Delete';
import * as getCollections from './GetCollections';

export const CollectionProvider = {
    ...create,
    ...getCollections,
    ...count,
    ...deleteCollection
};
