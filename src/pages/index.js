import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to Coffee First!</h1>
    <p>
      We believe in viably sourced, single origin, conflict free, sustainably
      produced, and energy efficient coffee production.
    </p>
    <p>
      We sell coffee, things to make coffee, books and magazines about coffee,
      pictures of coffee, things with coffee on them, and did we mention coffee?
    </p>
    <div style={{ maxWidth: `500px`, margin: `auto`, marginBottom: `1.45rem` }}>
      <Image />
      <p>
        Photo by{" "}
        <a
          href="https://unsplash.com/photos/obV_LM0KjxY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tina Guina
        </a>{" "}
        on Unsplash.
      </p>
    </div>
    <p>
      Check out our <Link to="/store/">Coffee First store!</Link>
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
