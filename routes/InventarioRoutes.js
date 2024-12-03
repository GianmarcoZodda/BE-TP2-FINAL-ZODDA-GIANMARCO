import { Router } from "express";
import InventarioController from "../controllers/InventarioController.js";

const routes = Router();

const inventarioController = new InventarioController();

routes.get("/get", inventarioController.listarJuegos);

routes.post("/create", inventarioController.registrarJuego);

routes.post("/vender", inventarioController.registrarVenta);


export default routes;