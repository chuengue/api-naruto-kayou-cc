import { ProvidersErrors } from '../../../shared';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IChangePrivacyProps } from '../types';

export const changePrivacy = async ({
    collectionId,
    userId,
    newPrivacy
}: IChangePrivacyProps) => {
    try {
        console.log({ newPrivacy });

        await Knex(ETableNames.collections)
            .where('id', collectionId)
            .andWhere('userId', userId)
            .update({ isPublic: newPrivacy, updatedAt: Knex.fn.now() });
    } catch (error) {
        console.error(error);
        throw new Error(ProvidersErrors.FAILED_UPDATE);
    }
};
