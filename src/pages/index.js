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
			ko: '작품사진',
			linkKey: 'artworks',
      desc: `태양 장노출, 폐선 장노출, 일반 작품 등을 소개합니다.`,
		},
		{
			id: 'exhibitions',
			ko: '전시',
			linkKey: 'exhibitions',
      desc: `"태양의 궤적", "갯가의 흔적" 등 작가가 진행했던 전시들을 소개합니다.`,
		},
		{
			id: 'about',
			ko: '작가 소개',
			linkKey: 'about',
      desc: `작가 소개입니다.`,
		},
		{
			id: 'home',
			ko: '맨 위로',
			linkKey: '',
      desc: '',
		},
	];
	
	list.map(item => (
		nodes.map(node => {
			if (node.name === item.id) {
				item.image = getImage(node)
			}
		})
	))
	return (
		<Layout>
			<Seo title="홈" />
			<svg className={styles.pageArrow} width={40} fill={"white"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
				<path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/>
			</svg>
			<div className={styles.photoMenuContainer}>
				{list.map(items => (
					<div className={styles.photoMenu} key={items.id}>
						<Link to={"/"+items.linkKey} key={items.id}>
							<div className={styles.photoContainer}>
								<GatsbyImage image={items.image} alt={items.id} className={styles.photo}/>
								<div className={styles.intro}>
                  <h1 className={styles.introTitle}>{items.ko}</h1>
                  <p>{items.desc}</p>
								</div>
							</div>
						</Link>
					</div>
				))}
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