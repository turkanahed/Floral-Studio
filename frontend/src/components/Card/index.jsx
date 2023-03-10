import React from 'react'
import { CardContainer } from './style'

const Card = ({ name, price, img, handleDelete , id}) => {
    return (
        <CardContainer>
            <div className="MyCard">
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-desc">
                    <h2>{name}</h2>
                    <p>{price}</p>
                </div>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </CardContainer>
    )
}

export default Card