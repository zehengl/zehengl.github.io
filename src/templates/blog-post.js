import "katex/dist/katex.min.css"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  const location = props.location

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md mt-4 divide-y divide-gray-400">
        <div>
          <h1 className="font-bold text-gray-700 mb-2">{post.frontmatter.title}</h1>
          <p className="text-gray-500 mb-4"> {post.frontmatter.date}</p>
          <div className="mb-8" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        <div>
          <ul className="flex flex-nowrap items-center justify-between text-blue-500 mt-6">
            <li>
              {previous && (
                <a href={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </a>
              )}
            </li>
            <li>
              {next && (
                <a href={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
      }
    }
  }
`
