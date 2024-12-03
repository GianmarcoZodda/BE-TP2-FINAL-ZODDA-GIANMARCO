class Inventario {

   inventario = {
    juegos: [],
    ventas: [],
};

      crearJuego = async (juego) => {
        console.log("inventario: ", juego)
        this.inventario.juegos.push(juego);
        return juego;
    };
  
      listarJuegos = async () => {
        return this.inventario.juegos;
      };
  
      //este metodo solo lo hago aca xq no lo usa el usuario, solo para registrar la venta
      buscarJuegoPorId = async(id) => {
        return this.inventario.juegos.find((juego) => juego.id === id);
      };

      registrarVenta = async(venta) => {
        console.log("inventario venta: ", venta)
        this.inventario.ventas.push(venta);
        return venta;
      }

      listarInventario = async() => {
        return this.inventario;
      }
  }
  
  export default Inventario;