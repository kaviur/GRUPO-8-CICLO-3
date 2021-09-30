// Esta función permite validar campos de tipo texto ingresados en un input como el nombre y el apellido 
// manda un mensaje de error si el usuario ingresa número, caracteres especiales o más de 3 espacios en blanco 
// Permite ingresar tildes, ñ y ü
function checkInputTexto(valor,campo) {
    let input = document.getElementById(`${campo}`).value;
    //let input = valor;
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
    checkInputTexto(valor,"apellido");
}

function checkNombre(valor) {
    checkInputTexto(valor,"nombre");
}

function checkTelefono(valor) {
    let input = document.getElementById("telefono").value;
    let exp = /^\d[0-9]{7}$/;
    let chek_telefono = exp.test(input);
    if (!chek_telefono) {
        let msj = "";
        msjValidacion(true,"telefono",msj); 
        return true;
    } else {
        let msj = "Solo se permiten 7 numeros";
        msjValidacion(false,"telefono",msj);
        return false;
    }
}

function checkCorreo(valor) {
    let input = document.getElementById("correo").value;
    let expresion = /^[a-zA-Z0-9._-]+@+[a-zA-Z]+\.[a-zA-Z]{2,3,4}+$/; // Usuario con letras, números, punto, guión bajo, guión medio antes de la arroba, servidor con letras, despues del punto el dominio con letras de minimo 2 y máximo 4
    if (!input === "") { //  Valida si el campo esta vacio.
        let msj = "Campo obligatorio";
        msjValidacion(false,"correo",msj);
        return false;
    }
    if (!expresion.test(input)) { // Valida si el correo coincide con la expresion para registrar
        let msj = "";
        msjValidacion(true,"correo",msj);
        return true;
    } else {
        let msj = "El correo no es valido";
        msjValidacion(false,"correo",msj);
        return false;
    }
}

function checkContrasena(valor) {
    let input = document.getElementById("contrasena").value;
    //let exp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let min = /[a-z]+/;
    let mayu = /[A-Z]+/;
    let num = /[0-9]+/;
    let long = /[0-9a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s\'\:\.\,\;-]{8,}/;
    //let check_correo = exp.test(input);
    let contieneMinusculas = min.test(input);
    let contieneMayusculas = mayu.test(input);
    let contieneNumeros = num.test(input);
    let tienelalongitud = long.test(input);

    if (input.length == 0) {
        let msj = "Escribe algo en la contraseña";
        msjValidacion(false,"contrasena",msj);
        return false;
    } else if (contieneMayusculas == false) {
        let msj = "Escribe al menos una letra mayúscula";
        msjValidacion(false,"contrasena",msj);
        return false;
    } else if (contieneMinusculas == false) {
        let msj = "Escribe al menos una letra minúscula";
        msjValidacion(false,"contrasena",msj);
        return false;
    } else if (contieneNumeros == false) {
        let msj = "Escribe al menos un número";
        msjValidacion(false,"contrasena",msj);
        return false;
    } else if (tienelalongitud == false) {
        let msj = "La contraseña debe tener al menos 8 caracteres";
        msjValidacion(false,"contrasena",msj);
        return false;
    } else {
        let msj = "";
        msjValidacion(true,"contrasena",msj);
        return true;
    }
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

module.exports = {
    checkNombre,
    checkApellido,
    checkTelefono,
    checkCorreo,
    checkContrasena
}