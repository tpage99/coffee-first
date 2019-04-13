import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import storeItems from "../components/store-items"
import CoffeeItems from "../components/CoffeeItems"
import Celebration from "../assets/celebration.svg"

class Store extends React.Component {
  state = {
    storeItems,
  }

  render() {
    return (
      <Layout>
        <SEO title="Store" />
        <h1 style={{ textAlign: `center` }}>Welcome to Our Store!</h1>
        <Celebration className="center-svg" />
        <p style={{ textAlign: `center` }}>
          This is where you can shop for all of your coffee needs and wants!
        </p>
        <ul className="grid">
          {Object.keys(this.state.storeItems).map(key => (
            <CoffeeItems
              key={key}
              index={key}
              details={this.state.storeItems[key]}
            />
          ))}
        </ul>
        <p>
          Our work here is done. Head on{" "}
          <Link to="/">back to the homepage</Link>.
        </p>
      </Layout>
    )
  }
}

export default Store
