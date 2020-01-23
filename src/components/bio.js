/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { FaGithub, FaLinkedin, FaRss, FaTwitter } from "react-icons/fa"
import { StaticQuery, graphql } from "gatsby"

import Image from "gatsby-image"
import React from "react"
import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, siteUrl } = data.site.siteMetadata
        const linkStyle = { boxShadow: `none`, textDecoration: `none` }
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(1 / 2),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
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
