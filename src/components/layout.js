import React from "react"
import { version } from "../../package.json"

function Layout(props) {
  const { title, children } = props
  const [isOpen, setisOpen] = React.useState(false)
  function handleClick() {
    setisOpen(!isOpen)
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-100">
      <nav className="px-6 py-4 bg-white shadow">
        <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold text-gray-800 md:text-2xl">
                <a href="/">{title}</a>
              </p>
            </div>
            <button type="button" className="block md:hidden" onClick={handleClick}>
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!isOpen && (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`md:flex ${isOpen ? "block" : "hidden"} `}>
            <a
              href="/tags"
              className="flex my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Tags
            </a>
            <a
              href="/uses"
              className="flex my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Uses
            </a>
          </div>
        </div>
      </nav>
      <main className="flex-grow">{children}</main>
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
