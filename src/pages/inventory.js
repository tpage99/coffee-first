import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import storeItems from "../components/store-items"
import CoffeeItems from "../components/CoffeeItems"

// this was the previous store utilized before implementing the graphql query currently used in the store
// this uses a list of items from json to map over and display - it is very basic and has been re-factored to just be store inventory page

class Inventory extends React.Component {
  state = {
    storeItems,
  }

  render() {
    return (
      <Layout>
        <SEO title="Store Inventory" />
        <h1 style={{ textAlign: `center` }}>Welcome to Our Store Inventory Page!</h1>
        <p style={{ textAlign: `center` }}>
          This is a list of coffee items available with their descriptions and pricing.
        </p>
        <ul>
          {Object.keys(this.state.storeItems).map(key => (
            <CoffeeItems
              key={key}
              index={key}
              details={this.state.storeItems[key]}
            />
          ))}
        </ul>
        <p>
          Our work here is done. Head on back to the{" "}
          <Link to="/">
            <button>homepage</button>
          </Link>
        </p>
      </Layout>
    )
  }
}

export default Inventory