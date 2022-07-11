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
  `)

  return (
    <>
	  <div className="site-container">
		  <Header siteTitle={data.site.siteMetadata?.title} />
		  <div className="contents">
			<main>{children}</main>
			<footer
			  style={{
				marginTop: `var(--space-5)`,
				fontSize: `var(--font-sm)`,
			  }}
			>
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
