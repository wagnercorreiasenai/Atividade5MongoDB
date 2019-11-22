const express = require('express');

module.exports = function (server) {

    //API Routes
    const router = express.Router();
    server.use('/api', router);

    /* Middleware para usar em todos os requests enviados para a nossa API- Mensagem Padrão */
    router.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        /*Sinaliza de que deve proceguir para a próxima rota*/
        next();
    });

    /* Rota de Teste */
    router.get('/', function (req, res) {
        res.json({message: 'API Online'});
    });

    //Blog
    var blogQuerys = require('../models/blog/blogQuerys');
    router.route('/blog').post(blogQuerys.addBlog);
    router.route('/blog').get(blogQuerys.listaBlog);

    //Post
    var postQuerys = require('../models/post/postQuerys');
    router.route('/post').post(postQuerys.addPost);
    router.route('/post').get(postQuerys.listaPost);


};