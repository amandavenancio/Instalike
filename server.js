import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do aplicativo Express
const app = express();

// servir arquivos estáticos
app.use(express.static("uploads"));

routes(app);


app.listen(3000, () => {
  console.log("Servidor escutando...");
});

