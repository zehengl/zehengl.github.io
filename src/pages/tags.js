import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import kebabCase from "lodash/kebabCase"

// Utilities

// Components

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout location={"tags"} title={title}>
    <SEO title="Tags" />
    <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md mt-4">
      <h1 className="font-bold text-gray-700">Tags</h1>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`
