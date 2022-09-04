import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../css/page.module.css"

export default function Index({
	data,
}) {
	const { frontmatter, html } = data.markdownRemark;
	const { title } = frontmatter;

	// const photos = data.allFile.nodes.map(node => (
	// 	getImage(node)
	// ));
	const list = [
		{
			id: 'artworks',
			ko: '작품사진',
			linkKey: 'artworks',
			subMenu: [
				{
					id: 'solar long exposure',
					ko: '태양 장노출',
					linkKey: 'solar-long-exposure',
				},
				{
					id: 'ship long exposure',
					ko: '폐선 장노출',
					linkKey: 'ship-long-exposure',
				},
				{
					id: 'other long exposure',
					ko: '기타 장노출',
					linkKey: 'other-long-exposure',
				},
				{
					id: 'others',
					ko: '일반 작품',
					linkKey: 'other-artworks',
				},
			],
		},
		{
			id: 'exhibitions',
			ko: '전시',
			linkKey: 'exhibitions',
			subMenu: [
				{
					id: 'trajectory',
					ko: '태양의 궤적',
					linkKey: 'trajectory',
				},
				{
					id: 'seashore',
					ko: '갯가의 흔적',
					linkKey: 'seashore',
				},
				{
					id: 'others',
					ko: '기타 전시',
					linkKey: 'other-exhibitions',
				},
			],
		},
		{
			id: 'about',
			ko: '작가소개',
			linkKey: 'about',
		},
		{
			id: 'home',
			ko: '홈으로',
			linkKey: '',			
		},
	];

	const navigation = list.map(item => {
		if (item.ko === frontmatter.title) {
			return (
				<>
				<ul>
					{item.subMenu?.map(subMenuItems => {
						return (
							<li key={subMenuItems.linkKey}>
								<Link to={`/${item.id}/${subMenuItems.linkKey}`} key={subMenuItems.linkKey}>
									{subMenuItems.ko}
								</Link>
							</li>
						)
					})}
				</ul>
				</>
			)
		}
	})

  return (
		<Layout>
			<Seo title={title} />
			<div className={styles.contentsWrapper}>
				<h1>{title}</h1>
				<div dangerouslySetInnerHTML={{ __html: html }} />
				{navigation}
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