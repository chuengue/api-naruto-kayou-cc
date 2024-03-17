import { SQLErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { iCard } from '../../models/card';
import { IFilterListCardProps } from '../types';

export const getAll = async ({
    name,
    code,
    box,
    rarity,
    page,
    limit,
    searchQuery
}: IFilterListCardProps): Promise<iCard[] | Error> => {
    try {
        let query = Knex(ETableNames.narutoCards).select('*');
        if (name) query = query.where('name', 'like', `%${name}%`);
        if (code) query = query.where('code', 'like', `%${code}%`);
        if (rarity && rarity.length > 0) {
            query = query.whereIn('rarity', rarity);
        }
        if (box && box.length > 0) {
            query = query.whereIn('box', box);
        }
        
        if (searchQuery && searchQuery.trim() !== '') {
            query = query.where(function() {
                this.where('name', 'like', `%${searchQuery}%`)
                    .orWhere('code', 'like', `%${searchQuery}%`);
            });
        }

        const result = await query.offset((page - 1) * limit).limit(limit);

        return result;
    } catch (error) {
        console.error(error);
        return new Error(SQLErrors.NOT_FOUND_REGISTER);
    }
};
