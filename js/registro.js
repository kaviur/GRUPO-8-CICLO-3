//array de objetos global en el que se almacenan todos los datos de registro de todos los usuarios
// otra forma de declarar una variable global es window.totalUsuarios globalThis.totalUsuarios = [];
totalUsuarios = [];

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

    //Antes de agregar un registro se debe hacer la validación de los campos
    //FALTA ------------------------------------------------------------------------------------------------
    function Usuario(nombre, apellido, telefono, mail, pass) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.mail = mail;
        this.pass = pass;
    }

    nombreIngresado = document.getElementById("nombre").value;
    apellidoIngresado = document.getElementById("apellido").value;
    telefonoIngresado = document.getElementById("telefono").value;
    mailIngresado = document.getElementById("mail").value;
    passIngresado = document.getElementById("pass").value;

    var usuarioNuevo = new Usuario(nombreIngresado, apellidoIngresado, telefonoIngresado, mailIngresado, passIngresado);

    //Agregar elementos a un array
    totalUsuarios.push(usuarioNuevo);
    console.log(totalUsuarios);
}


module.exports = agregarRegistro;