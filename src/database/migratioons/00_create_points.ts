import Knex from 'knex';

export async function up(knex: Knex){
    //CRIAR A TABELA
    knex.schema.createTable('points', table => {
        
    });
}    

export async function down(){
    //ROLLBACK (DELETAR A TABELA)

}