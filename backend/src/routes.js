const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
const routes = Router();

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes;

// Métodos HTTP: GET, POST, PUT, DELETE

/*
    Tipos de parámetros:

    Query Params: request.query (Filtros, Ordenação, Páginação, ...)
    Route Params: request.params (É usado para indentificar um recurso na alteração ou remoção)
    Body: request.body (Dados para criação ou alteração de um registro)
*/

// MongoDB (não-relaciona)