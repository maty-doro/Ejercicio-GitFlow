function calcularTotal(precio, descuento) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  return precio - descuento;
}
function calcularPrecioFinal(precio, clase){
  if (clase == "estudiante"){
    precio -= (precio*0.15);
  }
  return precio;
}
module.exports = { calcularTotal, calcularPrecioFinal };