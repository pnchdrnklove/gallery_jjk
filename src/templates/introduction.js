import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../css/page.module.css"

export default function Introduction({
	data,
}) {
	const { frontmatter, html } = data.markdownRemark;
	const { title } = frontmatter;

	const photos = data.allFile.nodes.map(node => (
		getImage(node)
	));
	const photo = photos[Math.floor(Math.random()*photos.length)]

  return (
		<Layout>
			<Seo title={title} />
			<div className={styles.contentsWrapper}>
				<h1>{title}</h1>
				<div dangerouslySetInnerHTML={{ __html: html }} />
				<div className={styles.carouselWrapper}>
					<div className={styles.carouselContainer}>
						{photos.map((eachPhoto) => (
							<>
								<GatsbyImage className={styles.carouselImage} image={eachPhoto} alt={"sample image of "+title} />
							</>
						))}
					</div>
				</div>
				<h3><Link to="/">홈으로</Link></h3>
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query($pagePath: String!, $imagePath: String!) {
		markdownRemark(frontmatter: {path: {eq: $pagePath}}) {
			html
			frontmatter {
				path
				title
			}
		}
		allFile(filter: {relativeDirectory: {eq: $imagePath}}) {
			nodes {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	}
`;