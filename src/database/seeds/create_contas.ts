import Knex from 'knex';

export async function seed (knex: Knex){
    await knex('contas').insert([
        {nome: 'Caixa de mantimentos',descricao: 'Caixa para gerenciamento dos gastos com mantimentos'},
    ]);
}