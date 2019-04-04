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
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
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
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
