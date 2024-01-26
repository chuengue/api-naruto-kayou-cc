import { SQLErrors } from '../../../shared/enum/ErrorCodesSQL';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IUser } from '../../models';

export const getByEmail = async (email: string): Promise<IUser | Error> => {
    try {
        const result = await Knex(ETableNames.users)
            .select('*')
            .where('email', '=', email)
            .first();

        if (result) {
            const userResult: IUser = result as IUser;

            return userResult;
        }
        return new Error(SQLErrors.NOT_FOUND_REGISTER);
    } catch (error) {
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
