import * as count from './Count';
import * as create from './Create';
import * as deleteCard from './Delete';
import * as getAll from './GetAll';
import * as getById from './GetById';

export const CardsProviders = {
    ...getById,
    ...getAll,
    ...count,
    ...deleteCard,
    ...create
};
