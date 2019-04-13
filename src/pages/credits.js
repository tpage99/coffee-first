import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Credits" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Image and Photo Credits</h1>
    <h2>Home Page</h2>
    <p>
      Photo of coffee beans by{" "}
      <a
        href="https://unsplash.com/photos/obV_LM0KjxY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tina Guina
      </a>{" "}
      on Unsplash.
    </p>

    <h2>SVG Elements</h2>
    <p>
      All SVG elements on this page courtesy of the super talented{" "}
      <a href="https://twitter.com/ninalimpi">Katerina Limpitsouni</a> via her
      open-source illustrations project at{" "}
      <a href="https://undraw.co/">Undraw.co</a>.
    </p>
    <p>
      Check out our <Link to="/store/">Coffee First store!</Link>
    </p>
  </Layout>
)

export default IndexPage
