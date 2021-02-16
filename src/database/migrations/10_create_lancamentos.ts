import Knex from 'knex';

export async function up(knex: Knex){
    //CRIAR A TABELA
    return knex.schema.createTable('lancamentos', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('descricao').notNullable();
        table.string('tipo').notNullable();
        table.string('valor').notNullable();
        table.timestamp('data').defaultTo(knex.fn.now()); 
        table.bigInteger('contaId').index().references('id').inTable('contas');
    });
}    

export async function down(knex: Knex){
    //ROLLBACK (DELETAR A TABELA)
    return knex.schema.dropTable('lancamentos');
}