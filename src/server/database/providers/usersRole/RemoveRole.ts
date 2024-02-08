import { ProvidersSuccessMessage, SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IUsersRoles } from '../../models/UserRoles';

export const removeUserRoles = async ({
    userId,
    roleId
}: IUsersRoles): Promise<string | Error> => {
    try {
        const existingItem = await Knex(ETableNames.wishList)
            .where({
                userId: userId,
                roleId: roleId
            })
            .first();

        const existingRole = await Knex(ETableNames.roles)
            .where({
                id: roleId
            })
            .first();

        if (existingItem && !existingRole) {
            return new Error(SQLErrors.NOT_FOUND_REGISTER);
        }
        await Knex(ETableNames.usersRoles)
            .where({
                userId: userId,
                roleId: roleId
            })
            .del();
        return ProvidersSuccessMessage.SUCCESS_REMOVE_ITEM;
    } catch (error) {
        console.error(error);
        return new Error('Erro ao remover role');
    }
};
