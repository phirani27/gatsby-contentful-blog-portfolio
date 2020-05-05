import React from "react"
import Title from "../Title"
import styles from "../../css/blog-card.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"

const ProductItems = () => {
  const productQueryRes = useStaticQuery(getProductItems)
  const products = Object.values(productQueryRes.cTools)

  return (
    <section>
      <Title title="STAY HOME, STAY SAFE" subtitle="Social Distancing" />
      <ol className={styles.productList}>
        {products.map(product => {
          let imageTag = null
          if (product.masterData.current.variants[0].images.length > 0) {
            imageTag = (
              <img
                width="200"
                height="200"
                alt={product.masterData.current.description}
                src={product.masterData.current.variants[0].images[0].url}
              />
            )
          }
          return (
            <li className={styles.product} key={product.key}>
              <AniLink
                to={
                  "/" +
                  product.key.toLowerCase() +
                  "/" +
                  product.masterData.current.slug
                }
              >
                {imageTag}
                <div>{product.masterData.current.name}</div>
              </AniLink>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

const getProductItems = graphql`
  query {
    cTools {
      p1: product(key: "PRD-NFPCV9NS") {
        key
        id
        masterData {
          current {
            slug(locale: "en-IE")
            name(locale: "en-IE")
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
      p2: product(key: "PRD-HIBJHDAP") {
        key
        id
        masterData {
          current {
            slug(locale: "en-IE")
            name(locale: "en-IE")
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
      p3: product(key: "PRD-VSIPI2V7") {
        key
        id
        masterData {
          current {
            slug(locale: "en-IE")
            name(locale: "en-IE")
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
      p4: product(key: "PRD-BTV2QQY3") {
        key
        id
        masterData {
          current {
            slug(locale: "en-IE")
            name(locale: "en-IE")
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
      p5: product(key: "PRD-QWGCHDPQ") {
        key
        id
        masterData {
          current {
            slug(locale: "en-IE")
            name(locale: "en-IE")
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
      p6: product(key: "PRD-ZKUSANIO") {
        key
        id
        masterData {
          current {
            slug(locale: "en-IE")
            name(locale: "en-IE")
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
      p7: product(key: "PRD-PJTRNCEZ") {
        key
        id
        masterData {
          current {
            slug(locale: "en-IE")
            name(locale: "en-IE")
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

export default ProductItems
