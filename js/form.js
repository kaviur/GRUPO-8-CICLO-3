// Esta función permite validar campos de tipo texto ingresados en un input como el nombre y el apellido 
// manda un mensaje de error si el usuario ingresa número, caracteres especiales o más de 3 espacios en blanco 
// Permite ingresar tildes, ñ y ü
function checkInputTexto(campo) {
    let input = document.getElementById(`${campo}`).value;
    let exp = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos. Le puse que acepte mínimo 1 máximo 40 porque abajo valido que sea de 4 a 30 caracteres
    let check_input = exp.test(input);
    if(input.trim() == ""){
        let msj ="Por favor escribe algo en el campo";
        msjValidacion(false,`${campo}`, msj);
        return false;
    }else if( input.length < 4 ){
        if(check_input == false ){
            let msj = "No escribas números ni símbolos";
            msjValidacion(false,`${campo}`, msj);
            return false;
        }else{
            let msj = "Escribe al menos 4 letras";  
            msjValidacion(false,`${campo}`, msj); 
            return false;         
        }
    }else if( input.length > 30 ){
        if(check_input == false ){
            let msj = "No escribas números ni símbolos";
            msjValidacion(false,`${campo}`, msj);
            return false;
        }else{
            msj ="Lo siento, no puedes escribir más de 30 letras";  
            msjValidacion(false,`${campo}`, msj);
            return false;          
        }
    }else if(check_input != true){
        let msj = "No escribas números ni símbolos";
        msjValidacion(false,`${campo}`, msj);
        return false;
    }else if( input.indexOf("   ")!=-1 ){
        let msj = "Ups! has escrito muchos espacios en blanco";
        msjValidacion(false,`${campo}`, msj);
        return false;
    }else{
        let msj = "";
        msjValidacion(true,`${campo}`, msj); 
        return true;       
    }
}

function checkApellido(valor) {
    checkInputTexto("apellido");
}

function checkNombre(valor) {
    checkInputTexto("nombre");
}

// muestra mensaje de error si lo ingresado por el usuario no es válido o nada si es válido
// modifica el css del div contenedor del input conforme a el resultado de la validación
function msjValidacion(esvalido,campo, msj){
    let contenedor = document.getElementById(`contenedor_${campo}`);
    if( esvalido ){
        contenedor.style.border = "1px solid #aaa";
    }else{
        contenedor.style.border = "1px solid #f70a56";
    }
    document.getElementById(`error_${campo}`).innerHTML = msj;
}

module.export = {
    checkNombre,
    checkApellido,
    checkTelefono,
    checkCorreo,
    checkContraseña
};