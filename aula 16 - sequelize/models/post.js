import {sequelize, Sequelize} from './db.js';

const Post = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
});

export { Post };