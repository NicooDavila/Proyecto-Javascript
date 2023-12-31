let productos = []
async function getProducts(){
    const response = await fetch("data.json");
    const data = await response.json();
    productos = data
    
        const contenedorTienda = document.getElementById("tienda");
        console.log(productos[0])
        for (i = 0; i < carrito.length; i++) {
            actualizarCarrito(carrito[i].producto, carrito[i].cantidad)
            } 
        productos.forEach((producto, index) => {
            const div = document.createElement("div");
            div.className = "producto";
            div.innerHTML = `
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <h2>${producto.nombre}</h2>
                        <p>${producto.descripcion}</p>
                        <h3>$${producto.precio}</h3>
                        <input type="number" min="1" value="1" class="cantidad">
                    <button class="btn-agregar">Agregar al Carrito</button>
                    `;
            contenedorTienda.appendChild(div);
            
            div
            .querySelector(".btn-agregar")
            .addEventListener("click", () => agregarAlCarrito(index));
        });


};
getProducts()




let carrito = JSON.parse(localStorage.getItem("product"));
if(carrito == null){
    carrito = []
}
function agregarAlCarrito(indexProducto) {
    const producto = productos[indexProducto];
    const cantidad =
        document.getElementsByClassName("cantidad")[indexProducto].value;
    carrito.push({
        producto: producto,
        cantidad: cantidad,
    })
    saveLocal();
    actualizarCarrito(producto, cantidad);
    
}

const saveLocal = () => {
    localStorage.setItem("product", JSON.stringify(carrito));
}

function actualizarCarrito(producto, cantidad){
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width:50px;height:50px;"></td>
            <td>${producto.nombre}</td>
            <td>${cantidad}</td>
          <td>$${producto.precio * cantidad}</td>
        `;


    const tbody = document.querySelector("#lista-carrito tbody");
    tbody.appendChild(tr);

}

