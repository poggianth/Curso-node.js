import express from 'express';
const app = express();
import { engine as handlebars } from 'express-handlebars';
import bodyParser from 'body-parser';
import {Post} from "./models/post.js";
var port = 8081;


// Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());


// Rotas

app.get('/', (req, res) => {
    // Busca os dados no banco de dados
    // Atributo order: indica o campo onde ordenar e como vai ordernar
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.render('home', {posts: posts});
    });
});

app.get('/cadastro', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    const titulo = req.body.titulo;
    const conteudo = req.body.conteudo;

    Post.create({
        titulo: titulo,
        conteudo: conteudo
    }).then(() => {
        res.redirect('/');
    }).catch((erro) => {
        res.send(`[OPS] Erro ao cadastrar um Post: ${erro}`);
    });
});

app.get('/deletar/:id', (req, res) => {
    // destroy = deleta no DB
    Post.destroy({where: {'id': req.params.id}}).then(() => {
        res.send("Postagem deletada com sucesso!");
    }).catch((error) => {
        res.send(`Erro ao excluir postagem: ${error}`);
    });
});


// Tem que ser sempre A ÚLTIMA LINHA DO CÓDIGO
app.listen(port, function(){
    console.log(`Servidor rodando na URL https://localhost:${port}`)
});
