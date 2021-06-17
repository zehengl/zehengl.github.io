import { graphql } from "gatsby"

import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import kebabCase from "lodash/kebabCase"

function Index(props) {
  const location = props.location
  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug} className="mt-6">
            <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
              <div className="mt-1">
                <a href={node.fields.slug} className="text-2xl font-bold text-gray-700">
                  {title}
                </a>
                <p
                  className="mt-2 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
              <div className="mt-1 flex flex-wrap">
                {node.frontmatter.tags.map((tag) => (
                  <a
                    href={`/tags/${kebabCase(tag)}/`}
                    className="text-sm mr-1 px-1 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                  >
                    {tag}
                  </a>
                ))}
              </div>

              <div className="flex items-center justify-between mt-4">
                <a href={node.fields.slug} className="text-blue-500">
                  Read more
                </a>
                <span className="font-light text-gray-600">
                  {node.frontmatter.date}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            tags
          }
        }
      }
    }
  }
`
