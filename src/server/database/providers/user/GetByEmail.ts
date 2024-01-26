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

        return new Error('Registro não encontrado');
    } catch (error) {
        console.error(error);
        return new Error('Erro ao consultar o registro');
    }
};
