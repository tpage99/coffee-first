import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'

const conatinerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  padding: '1rem 0 1rem 0',
}

let stripe = [];

class Skus extends Component {
  // Initialize Stripe.js with your publishable key.
  state = {
    stripe,
  }
  componentDidMount() {
    this.setState({
      stripe: window.Stripe('pk_test_SHI9qdb0jXiP78EGXUsGrLsJ00mU6aeiaZ', {
        betas: ['checkout_beta_4'],
      }),
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
        query SkusForProduct {
          skus: allStripeSku {
            edges {
              node {
                id
                currency
                price
                image
                product {
                  metadata {
                    description
                  }
                }
                attributes {
                  name
                }
              }
            }
          }
        }
        `}
        render={({ skus }) => (
          <div style={conatinerStyles}>
            {skus.edges.map(({ node: sku }) => (
              <SkuCard key={sku.id} sku={sku} stripe={this.state.stripe} />
            ))}
          </div>
        )}
      />
    )
  }
}

export default Skus