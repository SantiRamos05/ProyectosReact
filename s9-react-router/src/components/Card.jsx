import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name, description, type, id}) => {
    const path = `/assets/${type}-${id}.jpg`
  return (
    <div className="card m-3 col-12 col-md-4" style={{ width: "18rem" }}>
        <img src={path} className="card-img-top" alt={id} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <Link className='card-link' to={`/character/${id}`}>Ver mas...</Link>
        </div>
    </div>
  )
}

export default Card