import * as create from './Create';
import * as deleteCollection from './Delete';
import * as getCollections from './GetCollections';
import * as updateCollection from './Update';

export const CollectionController = {
    ...create,
    ...getCollections,
    ...deleteCollection,
    ...updateCollection
};
