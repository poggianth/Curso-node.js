var http = require("http");
const porta = 8081;

http.createServer((req, res) => {
    res.end("Hello, World! Welcome to my website!");
}).listen(porta);


console.log(`Server rodando na porta ${porta}!`);

