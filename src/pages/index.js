import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../css/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
		<div className={styles.photoMenu}>
			<div className={styles.menu}>
				<Link to="/">
					<StaticImage
						src="../images/1.jpg"
						alt="photo number 1" />
				</Link>
			</div>
			<div className={styles.menu}>
				<Link to="">
					<StaticImage
						src="../images/2.jpg"
						alt="photo number 2" />
				</Link>
			</div>
			<div className={styles.menu}>
				<Link to="/">
					<StaticImage
						src="../images/3.jpg"
						alt="photo number 3" />
				</Link>
			</div>
			<div className={styles.menu}>
				<Link to="/">
					<StaticImage
						src="../images/4.jpg"
						alt="photo number 4" />
				</Link>
			</div>
		</div>
	</Layout>
)

export default IndexPage
