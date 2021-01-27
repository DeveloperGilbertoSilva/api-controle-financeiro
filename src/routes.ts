import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/contas', async (request, response) => {
    const contas = await knex('contas').select('*');
    response.json(contas);
});

routes.post('/contas', async (request, response) => {
    const {
        nome,
        descricao
    } = request.body;

    await knex('contas').insert({
        nome,
        descricao
    });

    response.json({success: true});
});

export default routes;