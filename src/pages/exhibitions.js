import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Exhibitions = () => (
  <Layout>
    <Seo title="Exhibitions" />
    <h1>This is a page for Exhibitions</h1>
    <p>Welcome to Exhibitions</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Exhibitions