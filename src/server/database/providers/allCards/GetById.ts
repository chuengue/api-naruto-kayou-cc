import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { iCard } from './../../models/card';

export const getById = async (cardId: string): Promise<iCard | Error> => {
    try {
        const result = await Knex(ETableNames.narutoCards)
            .select('*')
            .where('id', cardId)
            .first();

        if (result) return result;
        return new Error(SQLErrors.NOT_FOUND_REGISTER);
    } catch (error) {
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
