import { SQLErrors } from '../../../shared/helpers/ErrorCodesSQL';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IUser } from '../../models';

interface customError extends Error {

  code:string
}
export const create = async (user: Omit<IUser, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex(ETableNames.users).insert(user);
        if (typeof result === 'object') {
            return result;
        } else if (typeof result === 'number') {
            return result;
        }

        return new Error('Erro ao cadastrar o registro');
    } catch (error) {
        const err = error as customError;
        if(err.code === SQLErrors.DUPLICATE_REGISTER){
            return new Error ('Email já cadastrado');
        }
        return new Error('Erro ao cadastrar o registro');
    }
};