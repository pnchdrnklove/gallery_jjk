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
	
	// Array에서 랜덤 요소 추출 	
	const photo = photos[Math.floor(Math.random()*photos.length)]
	
	function getColorOfRGB(hexColor) {
		const c = hexColor.substring(1)      // 색상 앞의 # 제거
    const rgb = parseInt(c, 16)   // rrggbb를 10진수로 변환
    const r = (rgb >> 16) & 0xff  // red 추출
    const g = (rgb >>  8) & 0xff  // green 추출
    const b = (rgb >>  0) & 0xff  // blue 추출
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
    // 색상 선택
    return luma < 127.5 ? "white" : "black" // 글자색이
	}
	const carouselPhoto = photos.map((eachPhoto) => (
							<>
								<div className={styles.carouselImage} style={{backgroundColor: eachPhoto.backgroundColor}}>
									<GatsbyImage image={eachPhoto} alt={"sample image of "+title} objectFit="contain" key={eachPhoto}/>
								</div>
							</>
						))
	const carousel = <>
					<div className={styles.carouselWrapper}>
						<div className={styles.carouselContainer}>
							{carouselPhoto}
						</div>
						<div className={styles.carouselArrowWrapper}>
							<Link className={styles.carouselArrow} to="#">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
									<path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
								</svg>
							</Link>
						</div>
						<div className={styles.carouselArrowWrapper}>
							<Link className={styles.carouselArrow} to="#">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
									<path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
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