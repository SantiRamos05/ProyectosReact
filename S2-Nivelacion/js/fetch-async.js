const peticiones = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
    const data = await response.json();
    return data;
};

//const data = peticiones().then(console.log);