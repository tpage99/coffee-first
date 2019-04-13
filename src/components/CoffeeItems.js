import React from "react"

import "./CoffeeItems.css"

const formatPrice = cents => {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
}

class CoffeeItems extends React.Component {
  render() {
    const { image, name, price, desc, category } = this.props.details
    return (
      <div className="card">
        <li>
          <h2>{name}</h2>
          <p className="price">{formatPrice(price)}</p>
          <img src={image} alt={name} />
          <p>{desc}</p>
          <p>
            Category: <span className="category">{category}</span>
          </p>
        </li>
      </div>
    )
  }
}

export default CoffeeItems
