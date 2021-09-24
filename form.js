function checkNombre(valor) {
    let nombre = document.getElementsByTagName("nombre").value;
    let exp = /^[a-zA-ZÀ-ÿ\s]{4,30}$/;
    let chek_nombre = exp.test(nombre);
    if(chek_nombre && nombre != ""){
		alert("nombre válido");
        return true;
	} else {
		alert("nombre no válido");
        return false;
	}
}

function checkApellido(valor) {
    let nombre = document.getElementsByTagName("nombre").value;
    let exp = /^[a-zA-ZÀ-ÿ\s]{4,30}$/;
    let chek_nombre = exp.test(nombre);
    if(chek_nombre && nombre != ""){
		alert("nombre válido");
        return true;
	} else {
		alert("nombre no válido");
        return false;
	}
}

function checkTelefono(valor) {
    let telefono = document.getElementsByTagName("telefono").value;
    let exp = /^\d[0-9]{7}$/;
    let chek_telefono = exp.test(telefono);
    if (chek_telefono) {
        return true;
    } else {
        alert("Solo se permiten 7 numeros");
        return false;
    }
}

function checkCorreo(valor){
    let correo = document.getElementsByTagName("mail").value;
    let exp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let chek_correo = exp.test(correo);
    if(chek_correo && correo != ""){
		alert("correo válido");
        return true;
	} else {
		alert("correo no válido");
        return false;
	}
}

function checkContraseña(valor){
    let pass = document.getElementsByTagName("pass").value;
    //let exp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let min = /[a-z]+/;
    let mayu = /[A-Z]+/;
    let num = /[0-9]+/;
    let long = /[0-9a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s\'\:\.\,\;-]{8,}/;
    let chek_correo = exp.test(correo);
    let contieneMinusculas = min.test(pass);
    let contieneMayusculas = mayu.test(pass);
    let contieneNumeros = num.test(pass);
    let tienelalongitud = long.test(pass);

    if (pass == ""){
        alert("Escribe algo en la contraseña");
        return false;
    }else if( contieneMayusculas == false ){
        alert("Escribe al menos una letra mayúscula");
        return false;
    }else if( contieneMinusculas == false){
        alert("Escribe al menos una letra minúscula");
        return false;
    }else if( contieneNumeros == false){
        alert("Escribe al menos un número");
        return false;
    }else if( tienelalongitud == false){
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }else{
        return true;
    }
    
    
    
}


module.export = {
    checkNombre,
    checkApellido,
    checkTelefono,
    checkCorreo,
    checkContraseña
}