import { FaCheck } from "react-icons/fa"
import { IconContext } from "react-icons"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

function Used(props) {
  return (
    <li className="px-4">
      <del>{props.name}</del>
    </li>
  )
}

function Using(props) {
  return (
    <li className="flex px-4">
      <FaCheck />
      &nbsp;&nbsp;
      {props.name}
    </li>
  )
}

function UsesPage(props) {
  const location = props.location
  const siteTitle = props.data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Uses" />
      <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md mt-4">
        <h1 className="font-bold text-gray-700">
          Tech that I am using and used before
        </h1>
        <IconContext.Provider value={{ className: "text-green-500" }}>
          <h2 className="mt-8 text-green-500">Current Setup</h2>

          <h3 className="px-2 mt-6">Phone</h3>
          <ul className="mt-4">
            <Using name="Samsung Galaxy Note9" />
          </ul>

          <h3 className="px-2 mt-6">Color Palettes</h3>
          <ul className="mt-4">
            <Using name="Dracula (terminals)" />
            <Using name="Oceanic Next (code editors)" />
          </ul>

          <h3 className="px-2 mt-6">macOS</h3>
          <ul className="mt-4">
            <Using name="Apple Mac mini (M1, 2020)" />
            <Using name="BenQ PD2500Q 25-inch QHD Designer Monitor" />
            <Using name="Keychron K2 Version 2" />
            <Using name="Logitech MX Anywhere 3 Compact Performance Mouse" />
            <Using name="Logitech C920S Pro 1080p HD Webcam" />
          </ul>

          <h3 className="px-2 mt-6">Windows</h3>
          <ul className="mt-4">
            <Using name="Dell Inspiron 5480" />
            <Using name="Dell 24 Monitor - SE2419HR" />
            <Using name="Dell Ultrasharp 2007fp 20-inch" />
            <Using name="Keychron K1 Version 1" />
            <Using name="Logitech G700s Rechargeable Gaming Mouse" />
            <Using name="Logitech StreamCam Plus HD Webcam" />
          </ul>

          <div className="text-gray-500">
            <h2 className="mt-8 t">Past Gears</h2>

            <h3 className="px-2 mt-6">Computer</h3>
            <ul className="mt-4">
              <Used name="神舟承运 B740G" />
              <Used name="Compaq Presario CQ35" />
              <Used name="Apple MacBook Pro (13-inch, Early 2011)" />
              <Used name="Apple MacBook Pro (Retina, 15-inch, Mid 2014)" />
              <Used name="Lenovo Ideapad 120s (11)" />
            </ul>

            <h3 className="px-2 mt-6">Monitor</h3>
            <ul className="mt-4">
              <Used name="Apple 27-inch LED Cinema Display" />
              <Used name="Apple 27-inch Thunderbolt Display" />
            </ul>

            <h3 className="px-2 mt-6">Phone</h3>
            <ul className="mt-4">
              <Used name="Apple iPhone 3GS" />
              <Used name="Apple iPhone 5" />
              <Used name="Apple iPhone 6" />
              <Used name="Apple iPhone 7" />
              <Used name="Samsung Galaxy S10" />
            </ul>
          </div>
        </IconContext.Provider>
      </div>
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
