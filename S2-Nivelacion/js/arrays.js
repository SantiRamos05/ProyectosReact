const numeros = [1,2,3,4];
//FORMA 1
document.write("<ul>");
for(numero in numeros){
    document.write("<li>");
    document.write(numero);
    document.write("</li>");
}
document.write("</ul>");

//FORMA 2
document.write("<ul>");
numeros.map((numero, i)=>{
    document.write("<li>" + numero + "</li>");
});
document.write("</ul>");

//--ARRAY DESTRUCTION--//
const [,,, usuario4] = ["pepe", "alama", "marcela", "gozo", "de alegria"];
document.write(usuario4);