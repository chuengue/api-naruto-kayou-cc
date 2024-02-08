import * as createCard from './Create';
import * as deleteCard from './Delete';
import * as getAll from './GetAll';
import * as getById from './GetById';

export const cardsController = {
    ...getAll,
    ...getById,
    ...createCard,
    ...deleteCard
};
