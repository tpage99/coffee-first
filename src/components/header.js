import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#009688`,
      marginBottom: `1.45rem`,
      boxShadow: `4px 6px 30px 6px rgba(18, 18, 18, 0.75)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1080,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: `0 auto` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <span
            style={{
              border: `5px solid white`,
              borderRadius: `5px`,
              padding: `5px 15px`,
            }}
          >
            {siteTitle}
          </span>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
