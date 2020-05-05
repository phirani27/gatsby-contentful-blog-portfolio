import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Banner from "../components/Banner"
import ProductItems from "../components/Product/ProductItems"
import SEO from "../components/SEO"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Covid-19 National Pen Products" />
      <StyledHero img={data.contactImage.childImageSharp.fluid}>
        <Banner title="National Pen Products" />
      </StyledHero>
      <ProductItems />
    </Layout>
  )
}

export const getPortfolioImage = graphql`
  query {
    contactImage: file(relativePath: { eq: "health-care.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
