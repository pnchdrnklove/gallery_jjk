exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions
	const result = await graphql(`
  	{
      allMarkdownRemark {
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
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
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
}