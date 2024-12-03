import Inventario from "../models/Inventario.js";
import errors from "../utils/Errors.js";
import categoriasValidas from "../utils/Constants.js"


class InventarioService {
    inventarioModel = new Inventario();

  //funcion mia para validar los datos de entrada, hacerla en un middleware despues
    validarDatosJuego = (nombre, categoria, precio, stock) => {
      console.log(nombre, categoria, precio, stock)
    if (!nombre || typeof nombre !== 'string' || nombre.trim() === '') {
        throw new Error(errors.NombreObligatorio);
    }

    if (!categoria || !categoriasValidas.includes(categoria)) {
      throw new Error(errors.CategoriaInvalida);
    }

    if (typeof precio !== 'number' || precio < 0) {
        throw new Error(errors.PrecioInvalido);
    }

    if (typeof stock !== 'number' || stock < 0) {
        throw new Error(errors.StockInvalido);
    }
  };

  
  registrarJuegoService = async( nombre, categoria, precio, stock ) => {
    try{
      console.log("service: ", nombre, categoria, precio, stock)
      this.validarDatosJuego(nombre, categoria, precio, stock);
  
      const nuevoJuego = {
          id: (await this.inventarioModel.listarJuegos()).length + 1, //agarro el lenght y le sumo 1 para que no se me repita el id, lo pongo entr () xq sino no me respeta el await
          nombre,
          categoria,
          precio,
          stock,
      };
  
      console.log("servicio: ", nuevoJuego)
      const juegoCreado = await this.inventarioModel.crearJuego(nuevoJuego);
      return juegoCreado;
    } catch(error){
      throw error;
    } 
  };


  listarJuegosService = async() => {
    try{
      const juegos = await this.inventarioModel.listarJuegos();
      return juegos;
    }catch(error){
      throw error;
    }
  };



  registrarVentaService = async(id, cantidad) => {
    try{
      const juego = await this.inventarioModel.buscarJuegoPorId(id);
      console.log("servicio venta: ", juego, " ", juego.stock)
      
      if (!juego) {
        throw { statusCode: 400, message: errors.JuegoInexistente };
      }
      if (juego.stock < cantidad){
        throw { statusCode: 400, message: errors.SinStock };
      } 

      juego.stock -= cantidad;

      const venta = { id, cantidad };
      const ventaARealizar = await this.inventarioModel.registrarVenta(venta);
      return ventaARealizar;
    }catch(error){
      throw error;
    }
  }


  }

export default InventarioService;