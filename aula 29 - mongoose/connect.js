import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/aprendendo";

// Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

// Model - Usuários
const UsuariosSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  sobrenome: {
    type: String, 
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number, 
    require: true
  },
  pais: {
    type: String
  }
});

// Nome da collection (como se fosse a tabela)
mongoose.model('usuarios', UsuariosSchema);

const Usuario = mongoose.model('usuarios');
new Usuario({
  nome: "Th",
  sobrenome: "Poggian",
  email: "teste@gmail.com",
  idade: 19,
  pais: "Brasil"
}).save().then(() => {
  console.log("Usuário criado com sucesso!");
}).catch((error) =>{
  console.log(`Erro ao criar usuário: ${error}`);
});