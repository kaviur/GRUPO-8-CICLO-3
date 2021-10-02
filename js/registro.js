//array de objetos global en el que se almacenan todos los datos de registro de todos los usuarios
// otra forma de declarar una variable global es window.totalUsuarios globalThis.totalUsuarios = [];
registros = [];

function agregarRegistro() {
    /*
    //const inputs = document.querySelectorAll('#form-registro input');
    let elements = document.getElementById("form-registro").elements;
    //console.log(elements);

    for (var i = 0, element; element = elements[i++];) {
        //if (element.type === "text" && element.value === "")
        if(element.name != ""){
            console.log(element.value);  
            console.log("del for");
        } 
    }*/


    nombreIngresado = document.getElementById("nombre").value;
    apellidoIngresado = document.getElementById("apellido").value;
    telefonoIngresado = document.getElementById("telefono").value;
    mailIngresado = document.getElementById("correo").value;
    passIngresado = document.getElementById("contrasena").value;

    var usuarioNuevo = new Usuario(nombreIngresado, apellidoIngresado, telefonoIngresado, mailIngresado, passIngresado);

    //Agregar elementos a un array
    registros.push(usuarioNuevo);
    console.log(registros);
}

//Antes de agregar un registro se debe hacer la validación de los campos
//FALTA ------------
class Usuario {
    constructor(nombre, apellido, telefono, mail, pass) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.mail = mail;
        this.pass = pass;
    }
}

/*
Función para filtrar correos de gmail de los usuarios registrados que se encuentran en un 
arreglo llamado registros
*/
function filtrarCorreo(arreglo) {
    let expresionReg = /[a-zA-Z0-9_.+-]+@gmail.com/; 
    let listaCorreos = [];
    for (let i = 0; i < arreglo.length; i++){
        let correo = arreglo[i].mail;
        let datos = arreglo[i];
        let validarCorreo = expresionReg.test(correo);
        if (validarCorreo === true) {
            listaCorreos.push(datos);
        }
    }
    console.log(listaCorreos);
    return listaCorreos;
}

module.exports.agregarRegistro = agregarRegistro;
module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;