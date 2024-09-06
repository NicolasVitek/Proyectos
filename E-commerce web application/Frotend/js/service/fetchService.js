const urlProduct = "https://localhost:7062/api/Product"
const urlProductCart = "https://localhost:7062/api/ProductCart"
const urlOrden = "https://localhost:7062/api/Order"
const urlClient = "https://localhost:7062/api/Client"

import { deployAlert } from "../component/carrito.js"
import { ProductCart } from "../component/ProductCart.js"

export const createClient = async (dni, name, lastName, address, phoneNumber) => {
    try {
        const response = await fetch(urlClient, {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                dni: dni,
                firstName: name,
                lastName: lastName,
                address: address,
                phoneNumber: phoneNumber
            }),
        });
        if (!response.ok) {
            if (response.status === 400) {
                throw new Error("El cliente ya fue agregado");
            } else {
                throw new Error(`Error: ${response.statusText}`);
            }
        }
        else{
            console.log("Cliente creado")
        }
        return await response.json();
    } catch (error) {
        console.error("Error al crear el cliente:", error);
    }
};

export const getProduct = async (id) => {
    try {
        const response = await fetch(`${urlProduct}/${id}`);
        if (!response.ok) {
            throw new Error(`Error fetching product with id ${id}: ${response.statusText}`);
        }
        const productData = await response.json();
        return productData;
    } catch (error) {
        console.error(error);
        return null;
    }
};
export const getProductCart = async (productId, amaount) => {
    try {
        const response = await fetch(`${urlProduct}/${productId}`);
        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }
        const data = await response.json();
        return { amaount, ...data };
    } catch (error) {
        console.error("Error al obtener el producto del carrito:", error);
        return null; 
    }
};


export const crearCarrito = async (clientId, productId, amount) => {
    await fetch(urlProductCart, {
        headers: { "Content-Type": "application/json", },
        method: "POST",
        body: JSON.stringify({
            clientid: clientId,
            productid: productId,
            amount: amount
        })
    }).then((httpResponse) => {
        if (httpResponse.ok) {
            return httpResponse.json()
        }
        if (httpResponse.status == 500) {
            deployAlert("El producto ya esta en el carrito")
        }
    })
        .then(body => {
            localStorage.setItem(body.productId, JSON.stringify(new ProductCart(clientId, body.productId, body.amount)))
            console.log("Producto agregado")
        })
}
window.crearCarrito = crearCarrito
export const deleteCarrito = async (clientId, productId) => {
    await fetch(`${base}/${clientId}/${productId}`, {
        headers: { "Content-Type": "application/json", },
        method: "DELETE",
    })
        .then((httpResponse) => {
            if (httpResponse.ok) {
                return httpResponse.json()
            }
        })
        .then(body => {
            localStorage.removeItem(body.productId)
            console.log("Producto eliminado")
        })
}
export const changeCarrito = async (clientId, productId, amount) => {
    await fetch(urlCart, {
        headers: { "Content-Type": "application/json", },
        method: "PATCH",
        body: JSON.stringify({
            clientid: clientId,
            productid: productId,
            amount: amount
        })

    }).then((httpResponse) => {
        if (httpResponse.ok) {
            return httpResponse.json()
        }
    })
        .then(body => {
            localStorage.removeItem(body.productId)
            localStorage.setItem(body.productId, JSON.stringify(new ProductCart(clientId, body.productId, body.cantidad)))
            console.log("Producto actualizado")
        })
}
window.changeCarrito = changeCarrito
export const buscarProducto = async (callback) => {
    const nombreProducto = document.getElementById("Buscador").value;
    const orden = document.getElementById("orden").value;
    const isAscendingOrder = orden !== "Mayor a menor";
    try {
        const response = await fetch(urlProduct + "?" + new URLSearchParams({
            name: nombreProducto,
            sort: isAscendingOrder,
        }));
        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }
        const data = await response.json();
        callback(data.$values);
    } catch (error) {
        console.error("Error al buscar productos:", error);
    }
};
export const showBalance = async (startDate, endDate, callback) => {
    await fetch(urlOrden + "?" + new URLSearchParams({
        from: startDate,
        to: endDate,
    }))
        .then((httpResponse) => {
            if (httpResponse.ok) {
                return httpResponse.json()
            }
            else {
                deployAlert("La factura ya fue generada")
            }
        })
        .then(body => {
            callback(body.$values);
        })
}
export const showOrder = async (callback) => {
    await fetch(`${urlOrden}/${1}`, {
        headers: { "Content-Type": "application/json", },
        method: "POST",
    })
        .then((httpResponse) => {
            if (httpResponse.ok) {
                return httpResponse.json()
            }
            if (httpResponse.status == 500) {
                deployAlert("La factura ya fue generada")
            }
        })
        .then(body => {
            callback(body);
        })
}