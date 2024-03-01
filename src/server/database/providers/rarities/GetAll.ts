import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { iCard } from '../../models';

export const getAllRarities = async (): Promise<iCard[] | Error> => {
    try {
            return Knex(ETableNames.rarities)
            .select(

                `${ETableNames.rarities}.*`,

                );       
    } catch (error: any) {
        console.error(error);
        return new Error(error.message);
    }
};
