import React, { useCallback, useEffect, useState } from 'react'
import Card from './Card'

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");

  const peticion = useCallback(async () => {
    const key = "client_id=z5peZbI_jbFM7t90tzFAdSoKVlR6gYVu2dgb1fJ7aQY";
    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
        route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`;
    }

    const res = await fetch(route);

    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }


    setImages(data);
  }, [input]);
  

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };
  
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Buscar: <input className="w-100" type="text" name="inputText" /></label>
    </form>
    <hr />
    <div className="row">
    
        {images.map((img) => {
          return (
            <div key={img.id} className="col">
              <Card img={img.urls.regular} />
            </div>
          );
        })}
    </div>
    
    </>
  )
}

export default Cards