import React, {useState, useLayoutEffect, useEffect} from 'react'

const LayaoutEffect = () => {

  const [data, setData] = useState([]);
  const [length, setlength] = useState(0);


  const newData = [
      {
          name : "Santiago",
          email : "juan@correo.com"
      }
  ];

  useEffect(() => {
    setTimeout(()=>{
        setData(newData);
      }, 5000)
  }, [newData])
  

  useLayoutEffect(() => {
      const tam = data.length;
      setlength(tam)
  }, []);

  return (
    <>
    <h1>useLayaout</h1>
    <hr />
    <p>Valores: {length}</p>
    </>
  )
}

export default LayaoutEffect