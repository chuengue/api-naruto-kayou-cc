import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const deleteCard = async (cardId: string) => {
    try {
        const roleExist = await Knex(ETableNames.narutoCards)
            .where({
                id: cardId
            })
            .first();

        if (!roleExist) {
            throw new Error(SQLErrors.NOT_FOUND_REGISTER);
        }
        await Knex(ETableNames.narutoCards)
            .where({
                id: cardId
            })
            .del();
    } catch (error: any) {
        throw new Error(error.message);
    }
};
