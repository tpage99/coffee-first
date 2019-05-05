import React from "react"
import { Link } from "gatsby"
import Hero from "../assets/be_the_hero.svg"

import Layout from "../components/layout"

const Cancel = () => (
  <Layout>
    <h1 style={{ textAlign: `center` }}>You Were So Close!</h1>
    <Hero className="center-svg" />
    <p>
      Not sure what happened, but the purchase didn't go through. You can head on back to the{" "}
      <Link to="/">
        <button>homepage</button>
      </Link>
      {" "}or feel free to continue browsing the{" "}
      <Link to="/store">
        <button>store</button>
      </Link>
      in order to complete your purchase.
        </p>
  </Layout>
)

export default Cancel