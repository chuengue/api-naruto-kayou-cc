import * as createRarities from './Create';
import * as deleteRarity from './Delete';
import * as getAllRarities from './GetAll';

export const RaritiesProviders = {
    ...getAllRarities,
    ...createRarities,
    ...deleteRarity
};