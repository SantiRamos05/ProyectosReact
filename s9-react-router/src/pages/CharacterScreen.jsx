import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Characters } from '../models/Characters';

const CharacterScreen = ({}) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {type, name, description} = Characters.find(character=> character.id ===id);
    const path = `/assets/${type}-${id}.jpg`;
    const handleBack =() =>{
        navigate(-1)
    };

  return (

    <div className="container card mb-3 mt-5" style={{ maxWidth: 540 }}>
        <div className="row g-0 ">
            <div className="col-md-4">
            <img src={path} className="img-fluid rounded-start" alt={id} />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small><br />
                <button onClick={handleBack} className="btn btn-outline-primary">Volver</button>
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CharacterScreen