/**
 *Blog Model
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    nome: String,
    descricao: String,
    usuario : {
        nome : String,
        login : String,
        senha : String
    }
}, {collection: 'blog'}
);

module.exports = mongoose.model('blog', BlogSchema);