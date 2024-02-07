import { SQLErrors } from '../../../shared';
import { Knex } from '../../knex';

export const findLackingCards = async (
    comparisonTable: string,
    comparisonParameter: string,
    idList: string[]
): Promise<any[] | Error> => {
    try {
        const result = Knex(comparisonTable)
            .select([comparisonParameter])
            .whereNotIn(comparisonParameter, idList);
        return result;
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.NOT_FOUND_REGISTER);
    }
};
