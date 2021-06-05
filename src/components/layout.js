import { FaToggleOff, FaToggleOn } from "react-icons/fa"
import { rhythm, scale } from "../utils/typography"

import { Link } from "gatsby"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { version } from "../../package.json"

function Layout(props) {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        backgroundColor: "var(--bg)",
        color: "var(--textNormal)",
        transition: "color 0.2s ease-out, background 0.2s ease-out",
      }}
    >
      <header>{header}</header>
      <div
        style={{
          float: "right",
          paddingRight: ` ${rhythm(3 / 4)}`,
        }}
      >
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                aria-label="Dark mode"
                type="checkbox"
                onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
                style={{ display: "none" }}
              />{" "}
              {theme === "dark" ? (
                <FaToggleOn size={rhythm(1.25)} />
              ) : (
                <FaToggleOff size={rhythm(1.25)} />
              )}
            </label>
          )}
        </ThemeToggler>
      </div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, 🔧 with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` `}, 🧮 v{version}
      </footer>
    </div>
  )
}

export default Layout
