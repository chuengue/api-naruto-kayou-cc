import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { iCard } from '../../models/card';

export const findLackingCards = async (
    idList: string[]
): Promise<iCard[] | Error> => {
    try {
        const result = Knex(ETableNames.narutoCards)
            .select('*')
            .whereNotIn('id', idList);
        console.log((await result).length);
        return result;
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.NOT_FOUND_REGISTER);
    }
};
