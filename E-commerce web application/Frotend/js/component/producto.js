/*
export const displayProductoEnLista=(id, img, nombre, marca, precio, numero)=>`
        <div class="card p-4 border border-primary rounded" id="card${numero}">
                <div class="d-flex justify-content-between align-items-center ">
                    <div class="mt-2">
                        <h5 id='title${id}' class="text-primary font-weight-bold">${nombre}</h5>
                        <div class="mt-5">
                            <h5 class="text-uppercase mb-0">${marca}</h5>
                            <h1 class="main-heading mt-0">${"$"+precio}</h1>
                        </div>
                    </div>
                    <div class="image">
                        <img src="${img}" width="150">
                    </div>
                </div>       
                <div id="btnProducto">
                         <button id='btnSumar${numero}' type="button" onClick="sumarUnidad(${numero})">+</button>
                         <button id="btnRestar${numero}" type="button" onClick="restarUnidad(${numero})">-</button>
                         <input id='impCantidad${numero}' name=${id} type="number" min=0 minLength=1 value=0 placeholder="" readonly></input>
                         <button class="btnPrimary" id="btnAgregar${numero}" type="button" onClick="agregarCarrito(${numero})">Agregar</button>
                </div>
            </div>
        `
*/
export const displayProductoEnLista=(id,img,nombre,marca,precio,codigo, descripcion, numero)=>`
<div class="card p-4 border border-primary rounded" id="card${numero}">
<img class="card-img" src="${img}" alt="Vans">
<div class="d-flex justify-content-between align-items-center">
</div>
<div class="card-body" id="card${numero}">
  <h4 class="card-title" id='title${id}'>${nombre}</h4>
  <h6 class="card-subtitle mb-2 text-muted">${marca}</h6>
  <p class="card-text">${descripcion}. Codigo: ${codigo}</p>
  <div id="btnProducto">
  <button id='btnSumar${numero}' type="button" onClick="sumarUnidad(${numero})">+</button>
  <button id="btnRestar${numero}" type="button" onClick="restarUnidad(${numero})">-</button>
  <input id='impCantidad${numero}' name=${id} type="number" min=0 minLength=1 value=0 placeholder="" readonly></input>
  </div>
  <div class="buy d-flex justify-content-between align-items-center">
    <div class="price text-success"><h5 class="mt-4">${"$"+precio}</h5></div>
    <button class="btnPrimary" id="btnAgregar${numero}" type="button" onClick="agregarCarrito(${numero})">Agregar</button>
  </div>
</div>
</div>
</div>
`
