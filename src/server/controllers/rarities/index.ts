import * as create from './Create';
import * as deleteRarity from './Delete';
import * as getAllRarities from './GetAll';

export const RaritiesControllers = {
    ...getAllRarities,
    ...create,
    ...deleteRarity
};