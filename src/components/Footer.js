import React from "react"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import links from "../constants/links"
import styles from "../css/footer.module.css"

const Footer = () => {
  const linkProfilo =
    process.env.LINK_URL || "https://www.linkedin.com/in/ebuccelli/"
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Anilink fade key={index} to={item.path}>
              {item.text}
            </Anilink>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; XXXXXXXXXX {new Date().getFullYear()} All rights
        reserved
      </div>
      <div className={styles.copyright}>Mumbai</div>
      <div className={styles.created}>
        Created by <a href={linkProfilo}>phirani</a>
      </div>
    </footer>
  )
}

export default Footer
