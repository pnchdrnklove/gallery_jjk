import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../css/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
	  <div className="site-container">
      <Header siteTitle={String(data.site.siteMetadata?.title)} />
		  <div className="contents">
			  <main>{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()} by Jongkwan Jung
			  </footer>
		  </div>
	  </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
