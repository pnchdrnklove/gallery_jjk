import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ArtWorks = () => (
  <Layout>
    <Seo title="Artworks" />
    <h1>This is a page for artworks</h1>
    <p>Welcome to artworks</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArtWorks