import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description={data.site.siteMetadata.description} />
      <StyledHero home img={data.homeImage.childImageSharp.fluid}>
        <Banner
          title={data.site.siteMetadata.title}
          info="Corona Virus"
        ></Banner>
      </StyledHero>
    </Layout>
  )
}

export const getIndexData = graphql`
  query {
    homeImage: file(relativePath: { eq: "covid19Hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Index
