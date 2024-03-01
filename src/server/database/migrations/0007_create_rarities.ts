import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export const up = async (knex: Knex) => {
    return knex.schema
        .createTable(ETableNames.rarities, table => {
            table.uuid('id').defaultTo(knex.fn.uuid()).primary();
            table.string('name').notNullable().unique().checkLength('>=', 1);
            table.boolean('isPromo').defaultTo(false);
            table.timestamp('createdAt').defaultTo(knex.fn.now());
            table.timestamp('updatedAt').defaultTo(knex.fn.now());

            table.unique(['name'], 'unique_name_with_dash');

            table.comment('Tabela usada para armazenar raridade das cartas');
        })
        .then(() => {
            console.log(`# Create table ${ETableNames.rarities}`);
        });
};
export const down = async (knex: Knex) => {
    return knex.schema.dropTable(ETableNames.rarities).then(() => {
        console.log(`# Drop table ${ETableNames.rarities}`);
    });
};
