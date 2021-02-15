import Knex from 'knex';

export async function seed (knex: Knex){
    await knex('categorias').insert([
        {nome: 'Casa',descricao: 'Categoria para tipar gastos com a casa'},
    ]);
}