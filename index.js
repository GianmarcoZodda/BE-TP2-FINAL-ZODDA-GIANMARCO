import PORT from "./config.js"
import express from "express";
import routes from "./routes/InventarioRoutes.js";


const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para parsear datos de formularios URL-encoded
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
    console.log("server ok, puerto: ", PORT);
});