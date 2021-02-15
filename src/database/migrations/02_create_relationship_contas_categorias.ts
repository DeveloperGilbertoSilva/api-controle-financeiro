import Knex from 'knex';

export async function up(knex: Knex){
    //CRIAR A TABELA
    return knex.schema.alterTable('contas', table => {
       table.bigInteger('categoriaId').index().references('id').inTable('categorias'); 
    });
}    

export async function down(knex: Knex){
    //CRIAR A TABELA
    return knex.schema.alterTable('contas', table => {
        table.dropColumn('categoriaId');
    });
}    
