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

  const [height, setHeight] = React.useState(0);
  const [style, setStyle] = React.useState({paddingTop: `${height}`});
  const ref = React.useRef(null);
  
  React.useEffect(() => {
    setHeight(ref.current.offsetHeight);
    console.log(ref.current.offsetHeight);
    console.log(ref)

    setStyle({paddingTop: `${height}`});
  }, [height]);
  
  // const [headerHeight, setHeaderHeight] = React.useState(0);
  // const ref = React.useRef(null);

  // React.useRef(() => {
  //   setHeaderHeight(ref.current.clientHeight);
  //   console.log('height: ', ref.current.clientHeight);
  // }, []);

  return (
    <>
	  <div className="site-container">
      <Header siteTitle={data.site.siteMetadata?.title} ref={ref} />
		  <div className="contents" style={style}>
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
