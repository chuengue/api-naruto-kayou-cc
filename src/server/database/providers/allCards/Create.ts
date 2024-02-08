import { SQLErrors } from '../../../shared/enum/ErrorCodesSQL';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { iCard } from '../../models';

export const create = async ({
    name,
    box,
    imgSrc,
    code,
    rarity
}: Omit<iCard, 'id'>) => {
    try {
        const existingItem = await Knex(ETableNames.narutoCards)
            .where({
                code: code
            })
            .first();

        if (existingItem) {
            throw new Error(SQLErrors.DUPLICATE_REGISTER);
        }
        await Knex(ETableNames.narutoCards).insert({
            name: name,
            box: box,
            imgSrc: imgSrc,
            rarity: rarity
        });
    } catch (error: any) {
        throw new Error(error.message);
    }
};
