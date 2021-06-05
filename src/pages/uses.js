import { FaCheck } from "react-icons/fa"
import { IconContext } from "react-icons"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

function Used(props) {
  return (
    <li>
      <del>{props.name}</del>
    </li>
  )
}

function Using(props) {
  return (
    <li>
      {props.name} <FaCheck />
    </li>
  )
}

function UsesPage(props) {
  const location = props.location
  const siteTitle = props.data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Uses" />
      <h1>Tech that I used and am using</h1>
      <IconContext.Provider value={{ color: "green", className: "global-class-name" }}>
        <h2>Current Setup</h2>

        <h3>Phone</h3>
        <ul>
          <Using name="Samsung Galaxy Note9" />
        </ul>

        <h3>Color Palettes</h3>
        <ul>
          <Using name="Dracula (terminals)" />
          <Using name="Oceanic Next (code editors)" />
        </ul>

        <h3>macOS</h3>
        <ul>
          <Using name="Apple Mac mini (M1, 2020)" />
          <Using name="BenQ PD2500Q 25-inch QHD Designer Monitor" />
          <Using name="Keychron K2 Version 2" />
          <Using name="Logitech MX Anywhere 3 Compact Performance Mouse" />
          <Using name="Logitech C920S Pro 1080p HD Webcam" />
        </ul>

        <h3>Windows</h3>
        <ul>
          <Using name="Dell Inspiron 5480" />
          <Using name="Dell 24 Monitor - SE2419HR" />
          <Using name="Keychron K1 Version 1" />
          <Using name="Logitech G700s Rechargeable Gaming Mouse" />
          <Using name="Logitech StreamCam Plus HD Webcam" />
        </ul>

        <hr />

        <h2>Past Gears</h2>

        <h3>Computer</h3>
        <ul>
          <Used name="神舟承运 B740G" />
          <Used name="Compaq Presario CQ35" />
          <Used name="Apple MacBook Pro (13-inch, Early 2011)" />
          <Used name="Apple MacBook Pro (Retina, 15-inch, Mid 2014)" />
          <Used name="Lenovo Ideapad 120s (11)" />
        </ul>

        <h3>Monitor</h3>
        <ul>
          <Used name="Apple 27-inch LED Cinema Display" />
          <Used name="Apple 27-inch Thunderbolt Display" />
        </ul>

        <h3>Phone</h3>
        <ul>
          <Used name="Apple iPhone 3GS" />
          <Used name="Apple iPhone 5" />
          <Used name="Apple iPhone 6" />
          <Used name="Apple iPhone 7" />
          <Used name="Samsung Galaxy S10" />
        </ul>
      </IconContext.Provider>
    </Layout>
  )
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
