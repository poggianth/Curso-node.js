const express = require("express");
const app = express();
var port = 8081;






// Rota principal
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/blog", (req, res) => {
    res.send("Bem-vindo ao meu blog!");
});


app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/ola/:nome/:cargo/:cor", (req, res) => {
    res.send(`<h1>Ola, ${req.params.nome}</h1> <h2>Seu cargo e:  ${req.params.cargo}</h2> <h3>Sua cor favorita e: ${req.params.nome}</h3>`);

});


// Tem que ser sempre A ÚLTIMA LINHA DO CÓDIGO
app.listen(port, function(){
    console.log(`Servidor rodando na URL https://localhost:${port}`)
});