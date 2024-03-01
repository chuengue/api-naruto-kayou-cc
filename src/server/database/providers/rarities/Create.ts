import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IRarity } from '../../models';

export const create = async ({
    name,
    isPromo
}: Pick<IRarity, 'name' | 'isPromo' >) => {
    try {
        const existingItem = await Knex(ETableNames.rarities)
            .where({
                name: name,
                isPromo: isPromo
            })
            .first();

        if (existingItem) {
            throw new Error(SQLErrors.DUPLICATE_REGISTER);
        }
        await Knex(ETableNames.rarities).insert({
            name: name,
        });
    } catch (error: any) {
        throw new Error(error.message);
    }
};
