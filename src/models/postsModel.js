import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

     // Conecta ao banco de dados MongoDB usando a string de conexão fornecida
    const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

    // Função assíncrona para obter todos os posts de um banco de dados específico
    export async function getTodosPosts() {
      // Seleciona o banco de dados 'imersao-instabyte' e a coleção 'posts'
      const db = conexao.db("imersao-instabyte");
      const colecao = db.collection("posts");
      // Retorna um array com todos os documentos da coleção
      return colecao.find().toArray();
    };

    export async function criarPost(novoPost) {
            const db = conexao.db("imersao-instabyte");
            const colecao = db.collection("posts");
            return colecao.insertOne(novoPost);
    }

    export async function atualizarPost(id, novoPost) {
      const db = conexao.db("imersao-instabyte");
      const colecao = db.collection("posts");
      const objID = ObjectId.createFromHexString(id);
      return colecao.updateOne({_id:new ObjectId(objID)}, {$set:novoPost} );
};

    // Inicia o servidor na porta 3000
    // app.listen(3000, () => {
    //   console.log("Servidor escutando na porta 3000...");
    // });
  // } catch (erro) {
  //   // Trata erros que possam ocorrer durante a conexão com o banco de dados
  //   console.error("Erro ao conectar ao banco de dados:", erro);
