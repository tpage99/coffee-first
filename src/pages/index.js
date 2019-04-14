import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GetCoffee from "../assets/getting_coffee.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`coffee`, `store`, `beans`]} />
    <h1>Welcome to Coffee First!</h1>
    <p>
      We believe in viably sourced, single origin, conflict free, sustainably
      produced, and energy efficient coffee production.
    </p>
    <GetCoffee className="center-svg" />
    <p>
      We sell coffee, things to make coffee, books and magazines about coffee,
      pictures of coffee, things with coffee on them, and did we mention coffee?
      But enough talk, because a picture's worth a thousand words, here's a
      picture of coffee{" "}
      <span role="img" aria-label="hand pointing down">
        👇
      </span>
    </p>
    <div style={{ maxWidth: `500px`, margin: `auto`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      Check out the{" "}
      <span role="img" aria-label="coffee mug">
        ☕
      </span>
      Coffee First{" "}
      <Link to="/store/">
        <button>store</button>
      </Link>
    </p>
    <h2>This is a Fictitiuos Demo Page</h2>
    <br />
    <p>
      This is an example store using Gatsby, an amazing static site generator
      that makes use of React to render flat HTML files on the user's end. In
      this example, we will also utilize/implement a payment API through Stripe
      for transactions (demo only).
    </p>
  </Layout>
)

export default IndexPage
