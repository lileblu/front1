const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "0225";
let cantidadIntentos = 3;


while (cantidadIntentos>0) {
    let usuario = prompt(`Ingrese su usuario`);
    let contrasena = prompt(`Ingrese su contraseña`);
   
    if ( usuario == USUARIO_CORRECTO & contrasena == CONTRASENA_CORRECTA) {
        console.log(`Bienvenido al sistema!`);
        break;
    } else { 
        cantidadIntentos--;
        console.log(`Datos incorrectos, te quedan ${cantidadIntentos} intentos` );
        if (cantidadIntentos == 0) {
            console.log(`Usuario bloqueado`)
        }
    }  
} 

 