import React from "react"
import { version } from "../../package.json"

function Layout(props) {
  const { title, children } = props

  return (
    <div className="overflow-x-hidden bg-gray-100">
      <nav className="px-6 py-4 bg-white shadow">
        <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold text-gray-800 md:text-2xl">{title}</p>
            </div>
            <div>
              <button
                type="button"
                className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-col hidden md:flex md:flex-row md:-mx-4">
            <a
              href="/"
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Home
            </a>
            <a
              href="/tags"
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Tags
            </a>
            <a
              href="/uses"
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Uses
            </a>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="mt-10 px-6 py-4 text-gray-100 bg-gray-800">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
          <p className="text-2xl font-bold">{title}</p>
          <p className="mt-2 md:mt-0">
            © {new Date().getFullYear()}, 🔧 with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
          <p className="mt-2 md:mt-0">
            <span role="img" aria-label="version">
              🧮 v{version}
            </span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
