import express from 'express';

const routes = express.Router();

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Juliete',
    'Gilberto'
];

routes.get('/', (request, response) => {
    //const search = String(request.query.search);
    //const filteredUsers = users.filter(user => user.includes(search));
    return response.json({message: 'Hello World'});
});

export default routes;