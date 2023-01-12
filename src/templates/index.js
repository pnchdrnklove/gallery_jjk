import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../css/indexTemplate.module.css"

export default function Index({
  data,
}) {
  const { frontmatter, html } = data.markdownRemark;
  const { title } = frontmatter;
	
  const photoList = data.allFile.nodes.map(node => {
	  return ({
	    dir: node.relativeDirectory,
      photo: getImage(node.childImageSharp.gatsbyImageData),
	  })
  });
  
  let myList = [];
  let a = {};
  
  if (photoList[0] !== undefined) {
	  a['dir'] = photoList[0]['dir'];
	  a['photo'] = [];
	  for (let idx = 0; idx < photoList.length; idx++) {
  	  if (a['dir'] !== photoList[idx]['dir']) {			
        let clone = Object.assign({}, a);
	      myList.push(clone);
	      a['dir'] = photoList[idx]['dir'];
	      a['photo'] = [];
	    }
	    a['photo'].push(photoList[idx]['photo']);
	    if (idx === photoList.length-1) {
	      myList.push(a);
	    }
	  }
	  myList.forEach(item => {
	    const itemDir = item['dir'].split('/');
	    const itemCategory = itemDir[itemDir.length - 1];
	    item['dir'] = itemCategory;
	  });
  };

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
	      <ul className={styles.subMenuList} key={item.linkKey}>
          {item.subMenu?.map(subMenuItems => {
            return (
              <li className={styles.subMenuListItem} key={subMenuItems.linkKey}>
                <h3>
                  <Link to={`/${item.id}/${subMenuItems.linkKey}`} className={styles.subMenuListLink}>
                    <span className={styles.subMenuListLinkItem}>{subMenuItems.ko}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                    </svg>
                    {myList?.map(myItem => {
                      if(myItem.dir === subMenuItems.linkKey) {
                        const photo = myItem.photo[Math.floor(Math.random()*myItem.photo.length)];
                        return (
                          <div className={styles.photoWrapper} key={photo.images.fallback.src}>
                            <GatsbyImage image={photo} alt="샘플 사진" />
                          </div>
                        )
                      }
                    })}
                  </Link>
                </h3>
              </li>
            )
          })}
        </ul>
	    )
	  }
  });
	
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
};

export const pageQuery = graphql`
  query($pagePath: String!, $lowerDir: [String!]) {
    markdownRemark(frontmatter: {path: {eq: $pagePath}}) {
      html
      frontmatter {
        path
        title
      }
    }
	  allFile(filter: {internal: {mediaType: {eq: "image/jpeg"}}, relativeDirectory: {in: $lowerDir}}
	  sort: {fields: relativePath}) {
	    nodes {
	      childImageSharp {
		      gatsbyImageData
        }
	      relativeDirectory
      }
    }
  }
`;