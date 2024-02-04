import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export const up = async (knex: Knex) => {
    return knex.schema
        .createTable(ETableNames.collectionsItems, table => {
            table.uuid('userId').notNullable();
            table.uuid('cardId').notNullable();
            table.uuid('collectionId').notNullable();
            table.bigInteger('quantity').notNullable().defaultTo(1);
            table
                .foreign('userId')
                .references('id')
                .inTable(ETableNames.users)
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table
                .foreign('collectionId')
                .references('id')
                .inTable(ETableNames.collections)
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            table
                .foreign('cardId')
                .references('id')
                .inTable(ETableNames.narutoCards)
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');

            table.timestamp('createdAt').defaultTo(knex.fn.now());
            table.timestamp('updatedAt').defaultTo(knex.fn.now());

            table.comment(
                'Tabela usada para armazenar items das coleções dos usuários do sistema'
            );
        })
        .then(() => {
            console.log(`# Create table ${ETableNames.collectionsItems}`);
        });
};

export const down = async (knex: Knex) => {
    return knex.schema.dropTable(ETableNames.collections).then(() => {
        console.log(`# Drop table ${ETableNames.collectionsItems}`);
    });
};
