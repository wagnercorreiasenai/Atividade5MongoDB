const blog = require('./blog');

module.exports = {
    //Função para adicionar novos blogs
    addBlog: function (req, res) {

        var b = new blog();

        //aqui setamos os campos do usuario (que virá do request)
        b.nome = req.body.nome;
        b.descricao = req.body.descricao;
        b.usuario.nome = req.body.nome_usuario;
        b.usuario.login = req.body.login;
        b.usuario.senha = req.body.senha;

        b.save(function (error) {
            if (error)
                res.send(error);
            res.json({message: 'Blog criado!'});
        });

    },
    listaBlog : function (req, res) {
        
        blog.find({}).exec(
          function (error, docs) {
              if (error)
                  res.send(error);
         res.json({docs});
        })
    }
};