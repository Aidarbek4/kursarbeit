import React from 'react';
import "./product.scss"

function Product({name, price, image}) {
  return (
    <div className="product">
        <img src={image} alt="profile" className="product__img" />
        <div className="product__info">
            <h4 className="product__name">{name}</h4>
            <p className="product__price">{price}</p>
        </div>
    </div>
  )
}

export default Product