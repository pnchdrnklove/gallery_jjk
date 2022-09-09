import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../css/introductionTemplate.module.css"

export default function Introduction({
	data,
}) {
	const { frontmatter, html } = data.markdownRemark;
	const { title } = frontmatter;

	const photos = data.allFile.nodes.map(node => (
		getImage(node)
	));
	
	function getColorOfRGB(hexColor) {
		const c = hexColor.substring(1)      // 색상 앞의 # 제거
    const rgb = parseInt(c, 16)   // rrggbb를 10진수로 변환
    const r = (rgb >> 16) & 0xff  // red 추출
    const g = (rgb >>  8) & 0xff  // green 추출
    const b = (rgb >>  0) & 0xff  // blue 추출
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
    // 색상 선택
    return luma < 127.5 ? "white" : "black" // 글자색이
	};

	const carouselPhoto = photos.map((eachPhoto) => (
								<div className={styles.carouselImage} style={{backgroundColor: eachPhoto.backgroundColor}} key={eachPhoto.images.fallback.src}>
									<GatsbyImage image={eachPhoto} alt={"sample image of "+title} objectFit="contain" key={eachPhoto.images.fallback.src}/>
								</div>
	));
	const carousel = <>
				<div className={styles.carousel}>
					<div className={styles.carouselArrowWrapper}>
						<Link className={styles.carouselArrow} to="#">
							<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
  							<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
							</svg>
						</Link>
					</div>
					<div className={styles.carouselWrapper}>
						<div className={styles.carouselContainer}>
							{carouselPhoto}
						</div>
					</div>
					<div className={styles.carouselArrowWrapper}>
						<Link className={styles.carouselArrow} to="#">
							<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
							</svg>
						</Link>
					</div>
				</div>
				</>
  return (
		<Layout>
			<Seo title={title} />
			<div className={styles.contentsWrapper}>
				<h1>{title}</h1>
				<div dangerouslySetInnerHTML={{ __html: html }} />
				{carousel}
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