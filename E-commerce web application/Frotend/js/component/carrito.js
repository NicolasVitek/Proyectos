import { changeCarrito, crearCarrito, crearCliente, deleteCarrito } from "../service/fetchService.js"
import {mostrarOrden } from "./mostrarElementos.js"

const deshabilitarFormulario=()=>{
    const nombre=document.getElementById("nombreCliente")
    const apellido=document.getElementById("apellidoCliente")
    const dni=document.getElementById("dniCliente")
    const direccion=document.getElementById("direccionCliente")
    const telefono=document.getElementById("telefonoCliente")
    const btnRegistrarCliente=document.getElementById("btnCliente")
    nombre.disabled=true
    apellido.disabled=true
    dni.disabled=true
    direccion.disabled=true
    telefono.disabled=true
    btnRegistrarCliente.disabled=true
}
window.deshabilitarFormulario=deshabilitarFormulario
    const registrarCliente=()=>{
    const nombre=document.getElementById("nombreCliente")
    const apellido=document.getElementById("apellidoCliente")
    const dni=document.getElementById("dniCliente")
    const direccion=document.getElementById("direccionCliente")
    const telefono=document.getElementById("telefonoCliente")
    crearCliente(dni.value, nombre.value, apellido.value, direccion.value, telefono.value)
    deshabilitarFormulario()
}


window.registrarCliente=registrarCliente
const deshabilitar=(id)=>{
    const btnEliminar= document.getElementById(`btnEliminar`+id)
    const btnModificar= document.getElementById(`btnModificar`+id)
    const btnSumar= document.getElementById(`btnSumar`+id)
    const btnRestar= document.getElementById(`btnRestar`+id)
    const btnAgregar=document.getElementById(`btnAgregar`+id)
    const text=document.getElementById(`impCantidad`+id)
    if(btnAgregar==null){
        btnEliminar.disabled=true
        btnModificar.disabled=true
    }
    else{
        btnAgregar.disabled=true
    }
    text.disabled=true
    btnSumar.disabled=true
    btnRestar.disabled=true
}
const sumarUnidad=(id)=>{
    const restar=document.getElementById(`btnRestar`+id)
    if(restar.disabled==true){
        restar.disabled=false
    }
    const text=document.getElementById(`impCantidad`+id)
    text.value++
}
export const deployAlert=(texto)=>{
    const alerta=document.getElementById("alerta")
    const advertencia=document.getElementById("advertencia")
    advertencia.textContent=texto
    alerta.removeAttribute("hidden")
    document.getElementById("btnCerrar").addEventListener("click",()=>alerta.setAttribute("hidden","hidden"))    
    window.scrollTo(0, 0);
}
const restarUnidad=(id)=>{
    const text=document.getElementById(`impCantidad`+id)
    const restar=document.getElementById(`btnRestar`+id)
    text.value--
    if(text.value<0){
        restar.disabled=true
        text.value=0
        deployAlert("La cantidad no puede ser negativa")     
    }
}
const agregarCarrito=(id)=>{
    const text=document.getElementById(`impCantidad`+id)
    if(text.value==0){
        deployAlert("La cantidad no puede ser cero")
    }
    else{
        crearCarrito(1, text.name,text.value)
        deshabilitar(id)
    }      
}
window.sumarUnidad = sumarUnidad;
window.restarUnidad=restarUnidad;
window.agregarCarrito=agregarCarrito
export const displayProducto= (id, img, nombre, precio, numero)=>`
        <div class="container" id="carrito_producto">
            <img id="img-producto" src="${img}" alt="">
            <label id="lblNombre">${nombre}</label>
            <label id="lblPrecio">${"$"+precio}</label>
            <button id='btnSumar${numero}' type="button" onClick="sumarUnidad(${numero})">+</button>
            <button id="btnRestar${numero}" type="button" onClick="restarUnidad(${numero})">-</button>
            <input id='impCantidad${numero}' name=${id} type="number" min=0 minLength=1 value=0 placeholder="" readonly></input>
            <button class="btnPrimary" id="btnAgregar${numero}" type="button" onClick="agregarCarrito(${numero})">Agregar</button>
        </div>`
 
const eliminarCarrito=(id)=>{
    const productId=document.getElementById(`impCantidad`+id)
    const card=document.getElementById(`card`+id)
    deleteCarrito(1, productId.name)
    card.parentNode.removeChild(card)
    /*deshabilitar(id)*/

}
const modificarCarrito=(id)=>{
    const text=document.getElementById(`impCantidad`+id)
    if(text.value==0){
        deployAlert("La cantidad no puede ser cero")
    }
    else{
        text.style.color="#0AE30A"
        text.style.fontWeight="bold"
        changeCarrito(1,text.name, text.value)
    }
}
window.eliminarCarrito=eliminarCarrito
window.modificarCarrito=modificarCarrito

export const displayCarrito=(id, img, nombre, precio, marca, numero, cantidad)=>`
<div class="card w-95 p-3" id="card${numero}">
<div class="d-flex justify-content-between align-items-start">
    <div class="mt-2">
        <h4 id='title${id}'>${nombre}</h4>
        
        <div class="mt-5">
            <h5 class="text-uppercase mb-0">${marca}</h5>
            <h1 class="main-heading mt-0">${"$"+precio}</h1>
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
             <button class="btnWarning" id="btnModificar${numero}" type="button" onClick="modificarCarrito(${numero})">Modificar</button>
</div>    
`
window.mostrarOrden=mostrarOrden
export const dislayBtnCerrarVenta=()=>`
<button id='btnCerrarVenta' type="button" onClick="mostrarOrden()" class="btn btn-primary btn-lg btn-block">Cerrar venta</button>
`
