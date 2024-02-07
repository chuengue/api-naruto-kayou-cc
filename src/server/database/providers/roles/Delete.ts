import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const deleteRole = async (roleId: string): Promise<void | Error> => {
    try {
        const roleExist = await Knex(ETableNames.roles)
            .where({
                id: roleId
            })
            .first();

        if (!roleExist) {
            return new Error(SQLErrors.NOT_FOUND_REGISTER);
        }

        await Knex(ETableNames.collections)
            .where({
                id: roleId
            })
            .del();
    } catch (error) {
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
