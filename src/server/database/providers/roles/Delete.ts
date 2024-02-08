import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const deleteRole = async (roleId: string) => {
    try {
        const roleExist = await Knex(ETableNames.roles)
            .where({
                id: roleId
            })
            .first();

        if (!roleExist) {
            throw new Error(SQLErrors.NOT_FOUND_REGISTER);
        }
        await Knex(ETableNames.roles)
            .where({
                id: roleId
            })
            .del();
    } catch (error: any) {
        throw new Error(error.message);
    }
};
