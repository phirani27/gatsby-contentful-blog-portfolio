import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

export const query = graphql`
  query($key: String!) {
    cTools {
      product(key: $key) {
        key
        id
        masterData {
          current {
            slug(locale: "en-IE")
            name(locale: "en-IE")
            metaTitle(locale: "en-IE")
            description(locale: "en-IE")
            masterVariant {
              images {
                url
                label
              }
            }
            variants {
              images {
                url
              }
            }
          }
        }
      }
    }
  }
`

const ProductPage = props => {
  let productinfo = props.data.cTools.product
  let mInfo = productinfo.masterData.current

  let imageTag = null
  if (mInfo.variants[0].images.length > 0) {
    imageTag = (
      <img
        height="500"
        width="500"
        alt={mInfo.description}
        src={mInfo.variants[0].images[0].url}
      />
    )
  }

  return (
    <Layout>
      <SEO title={mInfo.name} description={mInfo.description} />
      <h2>{mInfo.name}</h2>
      <p>{mInfo.slug}</p>
      <p>{mInfo.description}</p>
      {imageTag}
    </Layout>
  )
}

export default ProductPage
