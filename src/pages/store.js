import React from "react"
import { Link } from "gatsby"
import Celebration from "../assets/celebration.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Skus from "../components/Products/Skus"

const Store = () => (
  <Layout>
    <SEO title="Store" />
    <h1 style={{ textAlign: `center` }}>Welcome to Our Store!</h1>
    <Celebration className="center-svg" />
    <p>
      This is where you can shop for all of your coffee needs and wants!</p>
    <p> If you need more information about a product, check out our
          {" "}<Link to="/inventory">
        <button>
          inventory page
          </button>
      </Link>{" "}
      to learn more.
        </p>
    <p><em>*Because this is a demo site, functionality for purchases is for testing only. However, to maintain you don't have to put in your own info, see the Stripe docs for safe card numbers to use expressly for the purpose of testing at: https://stripe.com/docs/testing#cards </em></p>
    <Skus />
    <p>
      Our work here is done. Head on back to the{" "}
      <Link to="/">
        <button>homepage</button>
      </Link>
    </p>
  </Layout>
)

export default Store