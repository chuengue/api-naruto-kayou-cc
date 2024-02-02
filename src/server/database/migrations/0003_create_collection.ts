import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export const up = async (knex: Knex) => {
    return knex.schema
        .createTable(ETableNames.collections, table => {
            table.uuid('id').defaultTo(knex.fn.uuid()).primary();
            table.uuid('userId').notNullable();
            table.string('name').notNullable().checkLength('>', 3);
            table.string('phoneNumber').nullable();
            table.boolean('showPhoneNumber').notNullable().defaultTo(false);
            table.string('description').nullable();
            table.boolean('isPublic').notNullable().defaultTo(false);
            table
                .foreign('userId')
                .references('id')
                .inTable(ETableNames.users)
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table.timestamp('createdAt').defaultTo(knex.fn.now());
            table.timestamp('updatedAt').defaultTo(knex.fn.now());

            table.comment(
                'Tabela usada para armazenar coleções dos usuários do sistema'
            );
        })
        .then(() => {
            console.log(`# Create table ${ETableNames.collections}`);
        });
};

export const down = async (knex: Knex) => {
    return knex.schema.dropTable(ETableNames.collections).then(() => {
        console.log(`# Drop table ${ETableNames.collections}`);
    });
};
