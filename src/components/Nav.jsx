import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Nav = () => {
  const location = useLocation()
  const links = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Chat", to: "/chat" },
  ]

  const activeClass = "text-white bg-gray-900"
  const inactiveClass = "text-gray-300 hover:text-white hover:bg-gray-700"

  return (
    <nav className="bg-gray-800">
      <div className="flex items-baseline ml-10 space-x-4">
                {links.map((link, i) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      location.pathname === link.to
                        ? activeClass
                        : inactiveClass
                    } ${i > 0 && "ml-4"}`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
    </nav>
  )
}

export default Nav
