const Urlbase="https://localhost:7062/api/Producto"
const base="https://localhost:7062/api/Carrito"
const urlOrden="https://localhost:7062/api/Orden"
const urlCliente="https://localhost:7062/api/Cliente"

import { deployAlert } from "../component/carrito.js"
import { ProductoCarrito } from "../component/productosCarrito.js"

export const crearCliente=async (dni, name, lastName, address, phoneNumber)=>{
    await fetch(urlCliente,{
        headers: {"Content-Type": "application/json",},
        method:"POST",
        body:JSON.stringify({
            dni:dni,
            name:name,
            lastName:lastName,
            address:address,
            phoneNumber:phoneNumber})

    }).then((httpResponse)=>
    {
        if (httpResponse.ok) {
            return httpResponse.json()   
        }
        if(httpResponse.status==500){
            deployAlert("El cliente ya fue agregado")
        }
    })
    .then(body=>{
        console.log("Cliente creado")
    })
}

export const getProducto=async (id, callback)=>{
    await fetch(`${Urlbase}/${id}`)
    .then((httpResponse)=>
    {
        if (httpResponse.ok) {
            return httpResponse.json()   
        }
    })
    .then(body=>{
        callback(body);
    })
}
export const getProductoCarrito=async (productoId, cantidad, callback)=>{
    await fetch(`${Urlbase}/${productoId}`)
    .then((httpResponse)=>
    {
        if (httpResponse.ok) {
            return httpResponse.json()   
        }
    })
    .then(body=>{
        callback(cantidad, body);
    })
}
let contador=1

export const crearCarrito=async (clientId, productId, amount)=>{
    await fetch(base,{
        headers: {"Content-Type": "application/json",},
        method:"POST",
        body:JSON.stringify({
            clientid:clientId,
            productid:productId,
            amount:amount})

    }).then((httpResponse)=>
    {
        if (httpResponse.ok) {
            return httpResponse.json()   
        }
        if(httpResponse.status==500){
            deployAlert("El producto ya esta en el carrito")
        }
    })
    .then(body=>{
        localStorage.setItem(body.productoId,JSON.stringify(new ProductoCarrito(clientId, body.productoId, body.cantidad)))
        console.log("Producto agregado")
        contador++
    })
}
window.crearCarrito=crearCarrito
export const deleteCarrito=async (clientId, productId)=>{
    await fetch(`${base}/${clientId}/${productId}`,{
        headers: {"Content-Type": "application/json",},
        method:"DELETE",
    })
    .then((httpResponse)=>
    {
        if (httpResponse.ok) {
            return httpResponse.json()   
        }
    })
    .then(body=>{
        localStorage.removeItem(body.productoId)
        console.log("Producto eliminado")
    })
}
export const changeCarrito=async (clientId, productId, amount)=>{
    await fetch(base,{
        headers: {"Content-Type": "application/json",},
        method:"PATCH",
        body:JSON.stringify({
            clientid:clientId,
            productid:productId,
            amount:amount})

    }).then((httpResponse)=>
    {
        if (httpResponse.ok) {
            return httpResponse.json()   
        }
    })
    .then(body=>{
        localStorage.removeItem(body.productId)
        localStorage.setItem(body.productoId,JSON.stringify(new ProductoCarrito(clientId, body.productoId, body.cantidad)))
        console.log("Producto actualizado")
        contador++
    })
}
window.changeCarrito=changeCarrito
export const buscarProducto=async (callback)=>{
    const nombreProducto=document.getElementById("Buscador")
    const orden=document.getElementById("orden")
    let bool=true
    if(orden.value=="Mayor a menor"){
        bool=false
    }  
    await fetch(Urlbase +"?" + new URLSearchParams({
        name:nombreProducto.value,
        sort:bool,
    }))
    .then((httpResponse)=>
    {
        if (httpResponse.ok) {
            return httpResponse.json()
        }
    })
    .then(body=>{
        callback(body.$values);
    })
}
export const showBalance=async (desde, hasta, callback)=>{ 
    await fetch(urlOrden +"?" + new URLSearchParams({
        from:desde,
        to:hasta,
    }))
    .then((httpResponse)=>
    {
        if (httpResponse.ok) {
            return httpResponse.json()
        }
        else{
            deployAlert("La factura ya fue generada")
        }
    })
    .then(body=>{
        callback(body.$values);
    })
}
export const showOrder=async (callback)=>{ 
    await fetch(`${urlOrden}/${1}`,{
        headers: {"Content-Type": "application/json",},
        method:"POST",
    })
    .then((httpResponse)=>
    {
        if (httpResponse.ok) {
            return httpResponse.json()
        }
        if(httpResponse.status==500){
            deployAlert("La factura ya fue generada")
        }
    })
    .then(body=>{
        callback(body);
    })
}