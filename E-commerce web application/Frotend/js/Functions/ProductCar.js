import { cleanDiv } from "../component/mostrarElementos.js"
let _carrito = document.getElementById("divCarrito");
let divMian=document.getElementById("divMain");
let divCerrarVenta=document.getElementById("divCerrarVenta");
var btnModProductos = document.getElementById("eliminarProducto");
var contadorProductCar = 1;

var json = {
    "$id": "1",
    "id": 1,
    "nombre": "Alfajor",
    "descripcion": "Alfajor classic chocolate blanco 50 gramos",
    "marca": "Carrefour",
    "codigo": "a-043",
    "precio": 165.42,
    "image": "https://carrefourar.vtexassets.com/arquivos/ids/386573-800-auto?v=638318705016130000&width=800&height=auto&aspect=true"
}
export const dislayBtnCerrarVenta = () => `
<button id='btnCerrarVenta' type="button" onClick="mostrarOrden()" class="btn btn-primary btn-lg btn-block">Cerrar venta</button>
`;
export const displayCarrito = (
    id,
    img,
    nombre,
    precio,
    marca,
    numero,
    cantidad
) => `
  <div class="card w-95 p-3" id="card${numero}">
  <div class="d-flex justify-content-between align-items-start">
      <div class="mt-2">
          <h4 id='title${id}'>${nombre}</h4>
          <div class="mt-5">
              <h5 class="text-uppercase mb-0">${marca}</h5>
              <h1 class="main-heading mt-0">${"$" + precio}</h1>
          </div>
      </div>
      <div class="image mt-2">
          <img src="${img}" width="150">
      </div>
      <button class="btnDanger" id="btnEliminar${numero}" type="button" onClick="eliminarCarrito(${numero})">X</button>
  </div>       
  <div class="align-items-center" id="btnProducto">
               <button id='btnSumar${numero}' type="button" onClick="sumarUnidad(${numero})">+</button>
               <button id="btnRestar${numero}" type="button" onClick="restarUnidad(${numero})">-</button>
               <input id='impCantidad${numero}' name="${id}" type="number" min=0 minLength=1 value=${cantidad} placeholder="" readonly></input>
               <button class="btn btn-warning" id="btnModificar${numero}" type="button" onClick="modificarCarrito(${numero})">Modificar</button>
  </div>    
  `;
export const mostrarCarrito = async () => {
    cleanDiv()
    renderCarrito(2, json);
    /*for(var posicion=0;posicion<localStorage.length; posicion++){
        var productId=localStorage.key(posicion)
        var elemen=JSON.parse(localStorage.getItem(productId))
        await getProductoCarrito(elemen.productoId, elemen.productoCant, renderCarrito)
    }*/
    
}
export const renderCarrito = (cantidad, json) => {
    let nombre = json.nombre;
    let img = json.image;
    let precio = json.precio;
    let id = json.id;
    let marca = json.marca;
    _carrito.innerHTML = displayCarrito(id, img, nombre, precio, marca, contadorProductCar, cantidad);
    divMian.appendChild(_carrito);
    divCerrarVenta.innerHTML=dislayBtnCerrarVenta();
    divMian.appendChild(divCerrarVenta);
    contadorProductCar++;
}
export const desplegarCarrito = () => {
    btnModProductos.addEventListener("click", () => mostrarCarrito(1));
}