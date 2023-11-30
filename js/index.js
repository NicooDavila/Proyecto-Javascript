function checkearcredencial() {
    let usuario = ""; // Deje el espacio vacio para que se inicie con cualquier credencial
    let contraseña = "";
    let usuario_i = prompt("ingrese usuario", "@gmail.com");
    let contraseña_i = prompt("contraseña");
    if (usuario_i != usuario && contraseña_i != contraseña) {
        return true;
    } else {
        return false;
    }
}

function elegirGenero() {
    alert(
        "Elija sus géneros preferidos (Aventura, Deportes, Estrategia, Simulador, Terror)"
    );
    const género = prompt("ingrese género");
    switch (género) {
        case "Aventura":
            alert("seleccionaste Aventura");
            return género;

        case "Deportes":
            alert("seleccionaste Deportes");
            return género;

        case "Estrategia":
            alert("seleccionaste Estrategia");
            return género;

        case "Simulador":
            alert("seleccionaste Simulador");
            return género;

        case "Terror":
            alert("seleccionaste Terror");
            return género;

        default:
            alert("seleccion invalida");
            return elegirGenero();
    }
}

function main() {
    alert("Bienvenido a JuegosPC");
    alert("inicie sesion");

    if (!checkearcredencial()) {
        // Aca chequeo las credenciales
        alert("Datos incorrectos");
        return;
    }

    alert("datos correctos");
    const edad = prompt("Eres mayor de edad? \nSi/no");

    if (!(edad.toLowerCase() == "si")) {
        // Aca chequeo si es mayor de edad
        alert("Debes ser mayor de edad");
        return;
    }

    const productos = [
        { nombre: "God Of War", precio: 80, genero: "Aventura" },
        { nombre: "Spiderman", precio: 44, genero: "Aventura" },
        { nombre: "Minecraft", precio: 20, genero: "Aventura" },
        { nombre: "Fifa 23", precio: 120, genero: "Deportes" },
        { nombre: "NBA 2K23", precio: 70, genero: "Deportes" },
        { nombre: "Dirt 5", precio: 30, genero: "Deportes" },
        { nombre: "King Arthur", precio: 55, genero: "Estrategía" },
        { nombre: "Mount and Blade 2", precio: 40, genero: "Estrategía" },
        { nombre: "Plague", precio: 5, genero: "Estrategía" },
        { nombre: "Car Simulator", precio: 30, genero: "Simulador" },
        { nombre: "Farming Simulator 2022", precio: 35, genero: "Simulador" },
        { nombre: "Gran Turismo", precio: 24, genero: "Simulador" },
        { nombre: "Resident Evil 7", precio: 60, genero: "Terror" },
        { nombre: "Metro Exodus", precio: 50, genero: "Terror" },
        { nombre: "Alan Wake", precio: 30, genero: "Terror" },
    ];
    let carrito = [];


    let seleccion = ""
    do {
        alert("BIENVENIDO");
        seleccion = prompt("Desear comprar algo?, si o no ");
        
    
    } while (seleccion != "si")
    

    const genero = elegirGenero();

    const productos_filtrados = productos.filter(producto => producto.genero === genero);
    
    

    alert("lista de productos");

    let todoslosProductos = productos_filtrados.map(
        (producto) => producto.nombre + " " + "$" +  producto.precio 
    );
    alert(todoslosProductos.join(" - "));

    const producto = prompt("Agregar producto");
    
    let precio = 0

    for (let i = 0; i < productos_filtrados.length; i++) {
        if (productos_filtrados[i].nombre == producto) {
            precio = productos_filtrados[i].precio
            console.log("El precio es " + productos_filtrados[i].precio);
        }
    }


    let unidades = parseInt(prompt("cuantas unidades quiere comprar"));

    carrito.push({ producto, unidades, precio });

    // seleccion = prompt("desea seguir comprando?");

    alert("gracias por la compra, hasta pronto!");
    carrito.forEach((carritoFinal) => {
        alert(
            `producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades
            }, total del pago ${carritoFinal.unidades * carritoFinal.precio}`
        );
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
    console.log(`el total a pagar por su compra es: ${total}`);
}
main();
