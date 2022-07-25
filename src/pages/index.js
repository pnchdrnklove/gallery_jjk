import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../css/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({
	data: {
		allFile: {
			nodes
		}
	}
}) => {
	const list = [
		{
			id: 'artworks',
		},
		{
			id: 'exhibitions',
		},
		{
			id: 'about',
		},
		{
			id: 'home',
		},
	];
	
	list.map(item => (
		nodes.map(node => {
			if (node.name === item.id) {
				item.image = getImage(node)
			}
		})
	))
	console.log(list)
	return (
		<Layout>
			<Seo title="Home" />
			<svg className={styles.pageArrow} width={40} fill={"white"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
				<path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/>
			</svg>
			<div className={styles.photoMenu}>
				{
					list.map(items => (
						<div className={styles.menu} key={items.id}>
							<Link to={"/"+items.id} key={items.id}>
								<div className={styles.menuContainer}>
									<GatsbyImage image={items.image} alt={items.id}/>
									<div className={styles.introduction}>
										<p>
											"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
										</p>
									</div>
								</div>
							</Link>
						</div>
					))
				}
			</div>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query {
		allFile(filter: {relativeDirectory: {eq: "photos"}}) {
			nodes {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED)
				}
				name
			}
		}
	}
	`