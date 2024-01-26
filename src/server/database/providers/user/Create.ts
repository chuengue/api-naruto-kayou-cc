import { SQLErrors } from '../../../shared/enum/ErrorCodesSQL';
import { PasswordCrypto } from '../../../shared/services/PasswordCrypto';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IUser } from '../../models';

interface customError extends Error {
  code: string;
}

export const create = async (
    user: Omit<IUser, 'id'>
): Promise<number | Error> => {
    try {
        const hashedPassword = await PasswordCrypto.hashPassword(user.password);

        user.password = hashedPassword;

        const [result] = await Knex(ETableNames.users).insert(user);
        if (typeof result === 'object') {
            return result;
        } else if (typeof result === 'number') {
            return result;
        }

        return new Error(SQLErrors.GENERIC_DB_ERROR);
    } catch (error) {
        const err = error as customError;
        if (err.code === SQLErrors.DUPLICATE_REGISTER) {
            return new Error(SQLErrors.DUPLICATE_REGISTER);
        }
        return new Error(SQLErrors.GENERIC_DB_ERROR);
    }
};
