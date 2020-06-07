import Knex from 'knex';

export async function up(knex: Knex){
   return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').unique().notNullable();
        table.string('whatsapp').unique().notNullable();
        table.string('latitude').unique().notNullable();
        table.string('longitude').unique().notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
}

export async function down(knex: Knex){}