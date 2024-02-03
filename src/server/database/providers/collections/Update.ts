import { IUpdateCollectionProps } from '../../../controllers/collection/types';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';

export const updateCollection = async ({
    title,
    description,
    isPublic,
    collectionId
}: IUpdateCollectionProps): Promise<void | Error> => {
    try {
        const updateData: { [key: string]: unknown } = {};

        if (title !== null) updateData.title = title;
        if (description !== null) updateData.description = description;
        if (description !== null) updateData.isPublic = isPublic;
        updateData.updatedAt = Knex.fn.now();
        if (Object.keys(updateData).length === 0) {
            throw new Error('Nenhum campo fornecido para atualização');
        }

        const result = await Knex(ETableNames.collections)
            .where('id', collectionId)
            .update(updateData);

        if (result > 0) return;

        throw new Error('Erro ao atualizar o registro');
    } catch (error) {
        console.log(error);
        throw new Error('Erro ao atualizar o registro');
    }
};
