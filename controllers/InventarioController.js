import InventarioService from "../services/InventarioService.js";
import errors from "../utils/Errors.js";

class InventarioController {
  inventarioService = new InventarioService();

  registrarJuego = async(req, res) => {
    try {
      const { nombre, categoria, precio, stock } = req.body;
      console.log("controller: ", nombre, categoria, precio, stock)

      if (!nombre || !categoria || !precio || !stock) {
        return res.status(400).json(errors.DatosInvalidos);
    }

        const juego = await this.inventarioService.registrarJuegoService(nombre, categoria, precio, stock);
        //201, creado, 200 ok
        res.status(201).json(juego);
    } catch (error) {
      //422, error en los datos ingrersados
        res.status(422).json({ mensajeError: error.message });
    }
  };



  listarJuegos = async(req, res) => {
    try{
      const inventario = await this.inventarioService.listarJuegosService();
      res.status(200).json(inventario);
    }catch(error){
      res.status(400).json({ mensajeError: error.message });
    }
  };


  registrarVenta = async(req, res) => {
    try{
      const {id, cantidad} = req.body;
      console.log("registrar venta controller: ", id, cantidad)

      if (!id || !cantidad) {
        return res.status(422).json(errors.DatosInvalidos);
    }

    if (typeof cantidad !== 'number' || cantidad <= 0) {
      return res.status(422).json(errors.CantidadInvalida);
    }

    const venta = this.inventarioService.registrarVentaService(id, cantidad);
    res.status(201).json(venta); 
    }catch(error){
      res.status(400).json({ mensajeError: error.message });
    }
  }
  
  listarInventario = async() => {
    try{
      const inventario = await this.inventarioService.listarInventarioService();
      res.status(200).json(inventario);
    }catch(error){
      res.status(400).json({ mensajeError: error.message });
    }
  }


}

export default InventarioController;