import { SQLErrors } from '../../../shared/enum/ErrorCodesSQL';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IRole } from '../../models/role';

export const create = async ({
    roleName
}: Omit<IRole, 'id' | 'createdAt'>): Promise<void | Error> => {
    try {
        await Knex(ETableNames.collections).insert(roleName);
    } catch (error) {
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
