import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { iCard } from '../../models/card';

export const getAll = async (
    page: number,
    limit: number,
    code: string,
    box: string,
    name: string,
    rarity: string,
): Promise<iCard[] | Error> => {
    try {
        const query = Knex(ETableNames.narutoCards)
            .select('*');

        if (name) {
            query.where('name', 'like', `%${name}%`);
        }

        if (code) {
            query.where('code', 'like', `%${code}%`);
        }

        if (rarity) {
            query.where('rarity', '=', rarity);
        }

        if (box) {
            query.where('box', 'like', `%${box}%`);
        }

        const result = await query
            .offset((page - 1) * limit)
            .limit(limit);

        return result;
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.NOT_FOUND_REGISTER);
    }
};
