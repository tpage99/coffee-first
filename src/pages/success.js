import React from "react"
import { Link } from "gatsby"
import Hero from "../assets/be_the_hero.svg"

import Layout from "../components/layout"

const Success = () => (
  <Layout>
    <h1 style={{ textAlign: `center` }}>You've Done Something Awesome!</h1>
        <Hero className="center-svg" />
    <p>
          Thank you for your purchase. Now, head on back to the{" "}
          <Link to="/">
            <button>homepage</button>
          </Link>
          {" "}or feel free to continue browsing the{" "}
          <Link to="/store">
            <button>store</button>
          </Link>
        </p>
  </Layout>
)

export default Success