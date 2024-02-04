import { SQLErrors } from '../../../shared';
import { Knex } from '../../knex';
import { iCard } from '../../models/card';

export const findLackingCards = async (
    comparisonTable: string,
    comparisonParameter: string,
    idList: string[]
): Promise<iCard[] | Error> => {
    console.log({ comparisonTable, comparisonParameter, idList });
    try {
        const result = Knex(comparisonTable)
            .select('*')
            .whereNotIn(comparisonParameter, idList);
        console.log((await result).length);
        return result;
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.NOT_FOUND_REGISTER);
    }
};
