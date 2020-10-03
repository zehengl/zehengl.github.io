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
          <h2>Gears</h2>

          <h3>Laptop</h3>
          <ul>
            <Used name="神舟承运 B740G" />
            <Used name="Compaq Presario CQ35" />
            <Used name="Apple MacBook Pro (13-inch, Early 2011)" />
            <Used name="Apple MacBook Pro (Retina, 15-inch, Mid 2014)" />
            <Used name="Lenovo Ideapad 120s (11)" />
            <Using name="Dell Inspiron 5480" />
          </ul>

          <h3>Mechanical Keyboard</h3>
          <ul>
            <Using name="Keychron K1 Version 1" />
            <Using name="Keychron K2 Version 2" />
          </ul>
          <h3>Monitor</h3>
          <ul>
            <Used name="Apple 27-inch LED Cinema Display" />
            <Used name="Apple 27-inch Thunderbolt Display" />
            <Using name="BenQ PD2500Q 25-inch QHD Designer Monitor" />
          </ul>

          <h3>Phone</h3>
          <ul>
            <Used name="Apple iPhone 3GS" />
            <Used name="Apple iPhone 5" />
            <Used name="Apple iPhone 6" />
            <Used name="Apple iPhone 7" />
            <Used name="Samsung Galaxy Note9" />
            <Using name="Samsung Galaxy S10" />
          </ul>

          <h2>Software</h2>

          <h3>Color Palettes</h3>
          <ul>
            <Using name="Dracula (terminals)" />
            <Using name="Nord (code editors)" />
          </ul>
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
