import Knex from 'knex';

export async function up(knex: Knex){
    //CRIAR A TABELA
    return knex.schema.dropTableIfExists('lancamentos');
}    

export async function down(knex: Knex){
    //CRIAR A TABELA
    return knex.schema.dropTableIfExists('lancamentos');
}    
