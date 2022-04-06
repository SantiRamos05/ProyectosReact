//-------EJEMPLO ASYNC -------------
const saludos = async ()=>{
    return ("Gozo de Alegria");
};
saludos().then((response)=>console.log(response));
//----------------------------------
//------EJEMPLO AWAIT---------------
const peticion = async ()=>{
    setTimeout(()=>{
        const datos ={
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
        };
        console.log(datos)
    }, 1000);

};

peticion().then(console.log);
