function checkearcredencial() {
    let usuario=""; // Deje el espacio vacio para que se inicie con cualquier credencial
    let contraseña="";
    let usuario_i=prompt("ingrese usuario","@gmail.com");
    let contraseña_i=prompt("contraseña");
    if(usuario_i!=usuario && contraseña_i!=contraseña){
        return true
    }
    else{
        return false
    }

}

function elegirGenero(){
    alert("Elija sus géneros preferidos (Aventura, Deportes, Estrategia, Simulación, Terror)");
    const género=prompt("ingrese género").toLowerCase();
    switch(género){
        case "aventura":
            alert("seleccionaste Aventura");
            return género

        case "deportes":
            alert("seleccionaste Deportes");
            return género

        case "estrategia":
            alert("seleccionaste Estrategia");
            return género

        case "simulación":
            alert("seleccionaste Simulación");
            return género

        case "terror":
            alert("seleccionaste Terror");
            return género

        default:
            alert("seleccion invalida");
            return elegirGenero()
    }
}

function main(){
    alert("Bienvenido a JuegosPC");
    alert("inicie sesion");

    if(!checkearcredencial()){ // Aca chequeo las credenciales
        alert("Datos incorrectos")
        return 
    }

    alert("datos correctos");
    const edad = prompt("Eres mayor de edad? \nSi/no")

    if(!(edad.toLowerCase()=="si")){ // Aca chequeo si es mayor de edad
        alert("Debes ser mayor de edad")
        return
    }
    alert("BIENVENIDO");

    const genero = elegirGenero()

    alert("Seleccionaste el genero " + genero);




}

main()