const cuenta = 10;

//let mensaje;
//if(cuenta<0) mensaje = "no tiene saldo";
//else mensaje = "tienes saldo";

const mensaje = cuenta < 0 ? "no tienes saldo": "tienes saldo";
//const mensaje = cuenta < 0 && "Hola";
document.write(mensaje);