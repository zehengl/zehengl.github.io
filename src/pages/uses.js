import { FaCheck } from "react-icons/fa"
import { IconContext } from "react-icons"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class Used extends React.Component {
  render() {
    return (
      <li>
        <del>{this.props.name}</del>
      </li>
    )
  }
}

class Using extends React.Component {
  render() {
    return (
      <li>
        {this.props.name} <FaCheck />
      </li>
    )
  }
}

class UsesPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Uses" />
        <h1>Tech that I used and am using</h1>
        <IconContext.Provider
          value={{ color: "green", className: "global-class-name" }}
        >
          <h2>Laptop</h2>
          <ul>
            <Used name="神舟承运 B740G" />
            <Used name="Compaq Presario CQ35" />
            <Used name="Apple MacBook Pro (13-inch, Early 2011)" />
            <Used name="Apple MacBook Pro (Retina, 15-inch, Mid 2014)" />
            <Using name="Lenovo Ideapad 120s (11)" />
            <Using name="Dell Inspiron 5480" />
          </ul>
          <h2>Phone</h2>
          <ul>
            <Used name="Apple iPhone 3GS" />
            <Used name="Apple iPhone 5" />
            <Used name="Apple iPhone 6" />
            <Used name="Apple iPhone 7" />
            <Using name="Samsung Note 9" />
          </ul>

          <h2>Software</h2>
          <p>TBD...</p>
        </IconContext.Provider>
      </Layout>
    )
  }
}

export default UsesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
