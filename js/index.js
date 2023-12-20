const BOTON_INICIO = document.getElementById("botonInicio")
const usuarioCorrecto = "Nico";
const contraseñaCorrecta = "1899";

BOTON_INICIO.addEventListener("click",()=> {
    Swal.fire({
        title:"inicio de sesion",
        html:`
        <input type="text" id="usuario" class="swal2-input" placeholder="ingresar usuario">
        <input type="text" id="contraseña" class="swal2-input" placeholder="ingresar contraseña">
        `,
        confirmButtonText: "enviar",
        showCancelButton: true,
        cancelButtonText: "cancelar"
    }).then((result)=>{
        if(result.isConfirmed){
            const usuario= document.getElementById("usuario").value;
            const contraseña= document.getElementById("contraseña").value;
            if(usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){
                window.location.href="./juegos.html";
            }
        }
    })
})

const carrito = document.getElementById('carrito');
const elementos = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn =document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    
    elementos.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito)
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parenElement.parenElement;
        leerDatosElemento(elemento);
    }
}
function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAtribute('data-id')
    }
    insertarCarrito(infoElemento)
}

function insertarCarrito(elemento) {

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 />
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a herf="#" class="borrar" data-id= "${elemento.id}">X </a>
        </td>
    `;

    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')) {
        e.target.parenElement.parenElement.remove();
        elemento = e.target.parenElement.parenElement;
        elementoId = elemento.querySelector('a').getAtribute('data-id');
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}

// main();
