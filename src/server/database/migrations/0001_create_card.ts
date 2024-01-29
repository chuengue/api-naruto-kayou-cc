import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export const up = async (knex: Knex) => {
    return knex.schema
        .createTable(ETableNames.narutoCards, table => {
            table.uuid('id').defaultTo(knex.fn.uuid()).primary().index();
            table.string('box').nullable();
            table.string('rarity').notNullable();
            table.string('name').nullable();
            table.string('code').notNullable().unique();
            table.string('imgSrc').nullable();

            table.comment('Tabela usada para armazenar todos os cards ja lancados');
        })
        .then(() => {
            console.log(`# Create table ${ETableNames.narutoCards}`);
        });
};

export const down = async (knex: Knex) => {
    return knex.schema.dropTable(ETableNames.narutoCards).then(() => {
        console.log(`# Drop table ${ETableNames.narutoCards}`);
    });
};
