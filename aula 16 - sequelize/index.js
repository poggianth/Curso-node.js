import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
const app = express();
var port = 8081;


// Config
    // Template Engine
    app.engine('handlebars', engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());


// Rotas
app.get('/cadastro', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {
    const titulo = req.body.titulo;
    const conteudo = req.body.conteudo;

    res.send(`Titulo: ${titulo}. Conteudo: ${conteudo}`);
});


// Tem que ser sempre A ÚLTIMA LINHA DO CÓDIGO
app.listen(port, function(){
    console.log(`Servidor rodando na URL https://localhost:${port}`)
});
