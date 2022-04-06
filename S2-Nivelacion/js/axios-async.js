const petici = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/5");
    console.log(data);
};
const data = petici().then(console.log);