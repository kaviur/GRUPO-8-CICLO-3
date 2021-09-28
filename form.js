/* 
Función para validar el correo electrónico, si esta bien escrito
No permitir que el campo quede en vacio
*/
function checkCorreo(valor) {
    //let valor = document.getElementById("mail").value;
    let expresion = /^[a-zA-Z0-9._-]+@+[a-zA-Z]+\.[a-zA-Z]{2,3,4}+$/; // Usuario con letras, números, punto, guión bajo, guión medio antes de la arroba, servidor con letras, despues del punto el dominio con letras de minimo 2 y máximo 4
    if (!valor === "") { //  Valida si el campo esta vacio.
        //alert("Campo obligatorio");
        return true;
    }
    if (!expresion.test(valor)) { // Valida si el correo coincide con la expresion para registrar
        //alert("El correo es valido");
        return false;
    } else {
        //alert("El correo no es valido");
        return true;
    }
}
// Hola ensayando

module.exports = {checkCorreo};