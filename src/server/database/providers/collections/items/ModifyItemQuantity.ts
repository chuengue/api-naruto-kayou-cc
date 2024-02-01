import { ETableNames } from '../../../ETableNames';
import { Knex } from '../../../knex';
import { IModifyQuantityItemProps } from '../../types';

export const modifyItemQuantity = async ({
    cardId,
    collectionId,
    newQuantity
}: IModifyQuantityItemProps): Promise<string | Error> => {
    try {
        await Knex(ETableNames.collectionsItems)
            .where('collectionId', collectionId)
            .andWhere('cardId', cardId)
            .update({ quantity: newQuantity, updatedAt: Knex.fn.now() });
        return 'Quantidade atualiza com sucesso';
    } catch (error) {
        console.log(error);
        return new Error('Erro ao atualizar o registro');
    }
};
