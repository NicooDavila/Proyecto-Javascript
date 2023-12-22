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
