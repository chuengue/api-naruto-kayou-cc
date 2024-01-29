import * as count from './Count';
import * as getAll from './GetAll';
import * as getById from './GetById';

export const CardsProviders = {
    ...getById,
    ...getAll,
    ...count
};
