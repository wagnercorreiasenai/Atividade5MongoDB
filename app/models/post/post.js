/**
 *Post Model
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    id_blog: mongoose.Schema.Types.ObjectId,
    titulo: String,
    data: Date,
    sessao : {
        titulo : String,
        conteudo : String,
        sub_sessao : {
            titulo: String,
            conteudo: String
        }    
    }
}, {collection: 'post'}
);
module.exports = mongoose.model('post', PostSchema);