const post = require('./post');

module.exports = {
    //Função para adicionar novos posts
    addPost: function (req, res) {

        var p = new post();

        //aqui setamos os campos do usuario (que virá do request)
        p.id_blog = req.body.id_blog;
        p.titulo = req.body.titulo_post;
        p.data = req.body.data_post;
        p.sessao = req.body.sessao_blog;
        
        p.save(function (error) {
            if (error)
                res.send(error);
            res.json({message: 'Post criado!'});
        });

    },
    listaPost : function (req, res) {
        post.find({id_blog: req.query.id_blog}).sort({data:-1}).exec(
          function (error, docs) {
              if (error)
                  res.send(error);
         res.json({docs});
        })
    }
};