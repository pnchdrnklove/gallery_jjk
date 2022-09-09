exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions
	const result = await graphql(`
  	{
    	index: allMarkdownRemark(filter: {frontmatter: {template: {eq: "index"}}}) {
				edges {
					node {
          	frontmatter {
	            path
  	        }
    	    }
      	}
    	}
			introduction: allMarkdownRemark(filter: {frontmatter: {template: {eq: "introduction"}}}) {
				edges {
					node {
          	frontmatter {
	            path
  	        }
    	    }
      	}
    	}
		}
  `)
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}
  result.data.introduction.edges.forEach(({ node }) => {
    const path = node.frontmatter.path
		createPage({
      path,
      component: require.resolve(`./src/templates/introduction.js`),
      context: {
				pagePath: path,
				imagePath: "photos"+path,
			},
    })
  })
	result.data.index.edges.forEach(({ node }) => {
    const path = node.frontmatter.path
		const lowerDir = ["other-artworks", "other-long-exposure", "ship-long-exposure", "solar-long-exposure", "other-exhibitions", "seashore", "trajectory"]
		lowerDir.map((dir, idx) => {
			return (
				lowerDir[idx] = "photos" + path + "/" + dir
			)
		})
		console.log(lowerDir);
		createPage({
      path,
      component: require.resolve(`./src/templates/index.js`),
      context: {
				pagePath: path,
				imagePath: "photos"+path,
				lowerDir: lowerDir,
			},
    })
  })
}