import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export const up = async (knex: Knex) => {
    return knex.schema
        .createTable(ETableNames.wishList, table => {
            table.uuid('cardId').notNullable();
            table.uuid('userId').notNullable();
            table
                .foreign('cardId')
                .references('id')
                .inTable(ETableNames.narutoCards)
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            table.foreign('userId').references('id').inTable(ETableNames.users).onDelete('CASCADE').onUpdate('CASCADE');
            table.timestamp('createdAt').defaultTo(knex.fn.now());
            table.timestamp('updatedAt').defaultTo(knex.fn.now());

            table.comment('Tabela usada para armazenar items de desejo dos usuários do sistema');
        })
        .then(() => {
            console.log(`# Create table ${ETableNames.wishList}`);
        });
};

export const down = async (knex: Knex) => {
    return knex.schema.dropTable(ETableNames.wishList).then(() => {
        console.log(`# Drop table ${ETableNames.wishList}`);
    });
};
