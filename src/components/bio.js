/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { FaGithub, FaLinkedin, FaRss, FaTwitter } from "react-icons/fa"
import { StaticQuery, graphql } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social, siteUrl } = data.site.siteMetadata
        const linkStyle = { boxShadow: `none`, textDecoration: `none` }
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(1 / 2),
            }}
          >
            <GatsbyImage
              image={data.avatar.childImageSharp.gatsbyImageData}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong>
              <br />
              <a style={linkStyle} href={`https://twitter.com/${social.twitter}`}>
                <FaTwitter />
              </a>
              {` `}
              <a style={linkStyle} href={`https://github.com/${social.github}`}>
                <FaGithub />
              </a>
              {` `}
              <a style={linkStyle} href={`https://linkedin.com/in/${social.linkedin}`}>
                <FaLinkedin />
              </a>
              {` `}
              <a style={linkStyle} href={`${siteUrl}/rss.xml`}>
                <FaRss />
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/icon.png/" }) {
      childImageSharp {
        gatsbyImageData(width: 100, height: 100, layout: FIXED, placeholder: BLURRED)
      }
    }
    site {
      siteMetadata {
        author
        siteUrl
        social {
          twitter
          github
          linkedin
        }
      }
    }
  }
`

export default Bio
