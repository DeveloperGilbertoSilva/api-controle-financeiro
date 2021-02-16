import Knex from 'knex';

export async function up(knex: Knex){
    //CRIAR A TABELA
return knex.schema.raw('CREATE TABLE lancamentos (id INTEGER PRIMARY KEY AUTOINCREMENT,nome VARCHAR(255) NOT NULL, descricao VARCHAR(255) NOT NULL, tipo VARCHAR(255) NOT NULL, valor VARCHAR(255) NOT NULL)');
    // return knex.schema.createTable('lancamentos', table => {
    //     table.increments('id').primary();
    //     table.string('nome').notNullable();
    //     table.string('descricao').notNullable();
    //     table.string('tipo').notNullable();
    //     table.string('valor').notNullable();
    //     table.timestamp('data').defaultTo(knex.fn.now());
    //     table.integer('contaId').unsigned(); 
    //     table.foreign('contaId').references('contas.id').onDelete("CASCADE");
    // });
}    

export async function down(knex: Knex){
    //ROLLBACK (DELETAR A TABELA)
    return knex.schema.dropTable('lancamentos');
}