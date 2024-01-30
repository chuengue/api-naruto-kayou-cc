import * as count from './count';
import * as getPublicCollections from './getAll';
export const PublicCollectionsProviders = {
    ...getPublicCollections,
    ...count
};
