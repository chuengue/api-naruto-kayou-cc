import * as create from './Create';
import * as getByEmail from './GetByEmail';
import * as getByUsername from './GetByUser';

export const UsersProvider = {
    ...create,
    ...getByEmail,
    ...getByUsername
};
