// let registros = [];
let registros = [{ correo: "juan@gmail.com", contrasena: "SecurePassword123" }];

//Funcion agregarRegistro
function agregarRegistro() {
    if (typeof registros === "undefined") {
        globalThis.registros = new Array();
    }

    var inputs = document.getElementsByTagName("input");

    let arreglo = {
        correo: inputs[0].value,
        contrasena: inputs[1].value,
    };

    registros.push(arreglo);
    console.log(registros);
    return true;
}

function login() {
    var correo = document.getElementById("correo");
    var contrasena = document.getElementById("contrasena");

    const correoIn = correo.value;
    const contrasenaIn = contrasena.value;
    const captchaIn = captcha.value;

    for (var i = 0; i < registros.length; i++) {
        const correoDb = registros[i].correo;
        const contrasenaDb = registros[i].contrasena;
        if (correoIn.length == 0) {
            console.log("correo vacio o no existe");
            return false;
        } else {
            if (correoIn == correoDb) {
                if (contrasenaIn == contrasenaDb) {
                    if (validarCAPTCHA(captchaIn) == true) {
                        console.log("Acceso correcto a " + correoIn);
                        return true;
                    } else {
                        console.log("Acceso denegado, captcha incorrecto");
                        return false;
                    }
                } else {
                    console.log("Acceso denegado, clave incorrecta");
                    return false;
                }
            }
        }
    }
} //fin function login()

// const miLogin = document.getElementById("form-login");
// miLogin.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

//Funcion captcha
function validarCAPTCHA(valor) {
    if (Number(valor) === 1000) {
        return true;
    } else {
        return false;
    }
}

module.exports.registros = registros;
module.exports.login = login;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;