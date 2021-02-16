import Knex from 'knex';

export async function up(knex: Knex){
    //CRIAR A TABELA
    return knex.schema.alterTable('lancamentos', table => {
       table.string('valor').after('tipo'); 
    });
}    

export async function down(knex: Knex){
    //CRIAR A TABELA
    return knex.schema.alterTable('lancamentos', table => {
        table.dropColumn('valor');
    });
}    
