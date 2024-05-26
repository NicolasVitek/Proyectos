export const displayBalance=(numero, nombreCliente, apellidoCliente, nombreProducto, precioProducto, cantidadProducto, subTotal)=>`
    <tr class="bg-success">
        <th scope="row">${numero}</th>
        <td>${nombreCliente}</td>
        <td>${apellidoCliente}</td>
        <td>${nombreProducto}</td>
        <td>${cantidadProducto}</td>
        <td>$${precioProducto}</td>
        <td>$${subTotal}</td>
    `
export const displayTotal=(total)=>`
    <tr class="bg-primary">
        <th scope="row">Total</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><b>$${total}</b></td>

`