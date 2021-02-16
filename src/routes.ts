import express from 'express';
import knex from './database/connection';

const routes = express.Router();

// ================================================================= CATEGORIAS =================================================================
// ================== LISTAGEM DE CATEGORIAS ==================
routes.get('/categorias', async (request, response) => {
    const categorias = await knex('categorias').select('*');
    response.json(categorias);
});

// ==================INSERÇÃO DE CATEGORIAS ==================
routes.post('/categorias', async (request, response) => {
    const {
        nome,
        descricao
    } = request.body;
    
    await knex('categorias').insert({
        nome,
        descricao
    });

    response.json({success: true});
});

// ==================ALTERAÇÃO DE CATEGORIAS ==================
routes.put('/categorias', async (request, response) => {
    await knex('categorias').where({
        id: request.body.id
    }).update({
        nome: request.body.nome,
        descricao: request.body.descricao
    });

    response.json({success: true});
});

// ==================EXCLUSÃO  DE CATEGORIAS ==================
routes.delete('/categorias', async (request, response) => {
    const {id} = request.body;
    
    await knex('categorias').where('id', id).del();

    response.json({success: 'deleted'});
});




// ================================================================= CONTAS =================================================================

// ================== LISTAGEM DE CONTAS ==================
routes.get('/contas', async (request, response) => {
    const contas = await knex('contas').select('*');
    response.json(contas);
});

// ==================INSERÇÃO DE CONTAS ==================
routes.post('/contas', async (request, response) => {
    const {
        nome,
        descricao,
        categoriaId
    } = request.body;
    
    await knex('contas').insert({
        nome,
        descricao,
        categoriaId
    });

    response.json({success: true});
});

// ==================ALTERAÇÃO DE CONTAS ==================
routes.put('/contas', async (request, response) => {
    await knex('contas').where({
        id: request.body.id
    }).update({
        nome: request.body.nome,
        descricao: request.body.descricao,
        categoriaId: request.body.categoriaId
    });

    response.json({success: true});
});

// ==================EXCLUSÃO  DE CONTAS ==================
routes.delete('/contas', async (request, response) => {
    const {id} = request.body;
    
    await knex('contas').where('id', id).del();

    response.json({success: 'deleted'});
});




// ================================================================= LANÇAMENTOS =================================================================

// ================== LISTAGEM DE LANÇAMENTOS ==================
routes.get('/lancamentos', async (request, response) => {
    const lancamentos = await knex('lancamentos').select('*');
    response.json(lancamentos);
});

// ==================INSERÇÃO DE LANÇAMENTOS ==================
routes.post('/lancamentos', async (request, response) => {
    const {
        nome,
        descricao,
        tipo,
        valor,
        contaId
    } = request.body;
    
    await knex('lancamentos').insert({
        nome,
        descricao,
        tipo,
        valor,
        contaId
    });

    response.json({success: true});
});

// ==================ALTERAÇÃO DE LANÇAMENTOS ==================
routes.put('/lancamentos', async (request, response) => {
    await knex('lancamentos').where({
        id: request.body.id
    }).update({
        nome: request.body.nome,
        descricao: request.body.descricao,
        tipo: request.body.tipo,
        contaId: request.body.categoriaId
    });

    response.json({success: true});
});

// ==================EXCLUSÃO  DE LANÇAMENTOS ==================
routes.delete('/lancamentos', async (request, response) => {
    const {id} = request.body;
    
    await knex('lancamentos').where('id', id).del();

    response.json({success: 'deleted'});
});


export default routes;


