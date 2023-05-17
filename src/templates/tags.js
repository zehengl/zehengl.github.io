import Layout from "../components/layout"
import React from "react"
import { graphql } from "gatsby"

// Components

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = (
    <div>
      <span className="text-red-500">{totalCount}</span> post
      {totalCount === 1 ? "" : "s"} tagged with "
      <span className="text-green-500">{tag}</span>"
    </div>
  )

  return (
    <Layout location={`/tags/${tag}`} title={data.site.siteMetadata.title}>
      <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md mt-4">
        <h1 className="font-bold text-gray-700">{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <li key={slug} className="mt-2">
                <a href={slug}>{title} →</a>
              </li>
            )
          })}
        </ul>
        <a className="text-blue-500" href="/tags">
          Return to all tags
        </a>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
