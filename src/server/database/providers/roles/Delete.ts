import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const deleteRole = async (roleId: string) => {
    console.log(roleId);
    try {
        const roleExist = await Knex(ETableNames.roles)
            .where({
                id: roleId
            })
            .first();

        if (!roleExist) {
            throw new Error(SQLErrors.NOT_FOUND_REGISTER);
        }
        console.log('bateu');
        await Knex(ETableNames.roles)
            .where({
                id: roleId
            })
            .del();
    } catch (error: any) {
        throw new Error(error.message);
    }
};
