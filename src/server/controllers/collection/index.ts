import * as create from './Create';
import * as deleteCollection from './Delete';
import * as getCollections from './GetCollections';

export const CollectionController = {
    ...create,
    ...getCollections,
    ...deleteCollection
};
