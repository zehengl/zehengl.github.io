import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

function NotFoundPage(props) {
  const location = props.location
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div className="max-w-4xl px-10 py-6 mx-auto">
        <h1 className="text-4xl">Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
