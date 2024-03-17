import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const deleteRarity = async (rarityId: string) => {
    try {
        const roleExist = await Knex(ETableNames.rarities)
            .where({
                id: rarityId
            })
            .first();

        if (!roleExist) {
            throw new Error(SQLErrors.NOT_FOUND_REGISTER);
        }
        await Knex(ETableNames.rarities)
            .where({
                id: rarityId
            })
            .del();
    } catch (error: any) {
        throw new Error(error.message);
    }
};
