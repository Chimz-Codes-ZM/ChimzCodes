import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav
        className="sm:border-b px-4 py-2 flex fixed z-10 sm:w-full top-0"
        id="nav1"
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <button
          id="toggle-menu"
          className="block sm:hidden mr-auto"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div className="hidden sm:flex mr-auto space-x-2">
          <NavLink exact activeClassName="active" to="/">
            <span className="hover:shadow transition duration-500 px-2 text-white "> 
              About Me
            </span>
            |
          </NavLink>
          <NavLink exact activeClassName="active" to="/projects">
            <span className="hover:shadow transition duration-500 px-2 text-white">
              Projects
            </span>
            |
          </NavLink>
          <NavLink exact activeClassName="active" to="/skills">
            <span className="hover:shadow transition duration-500 px-2 text-white">
              Skills
            </span>
            |
            </NavLink>
          
        </div>

        <div>
        <NavLink exact activeClassName="active" to="/contact"
            className="
              border
              rounded-xl
              hover:text-white hover:bg-black
              px-2
              transition
              duration-200
              hidden
              sm:block
            "
          >
            Contact me
            </NavLink>
        </div>
      </nav>

      <nav
        id="nav-links"
        className={`flex flex-col text-center sm:hidden right-0  z-10 m-4 rounded-2xl m-2 shadow fixed w-28 ${
          showMenu ? '' : 'hidden'
        }`}
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <NavLink exact activeClassName="active" to="/"

          className="
          hover:bg-black
          hover:text-white
          py-2 transition duration-500 rounded border-b-2 border-black
"
        >
          About Me
        </NavLink>
        <NavLink exact activeClassName="active" to="/projects"

          className="
          hover:bg-black
          hover:text-white
          py-2 transition duration-500 rounded border-b-2 border-black
"
        >
          Projects
          </NavLink>
        <NavLink exact activeClassName="active" to="/skills"

          className="
          hover:bg-black
          hover:text-white
          py-2 transition duration-500 rounded border-b-2 border-black
"
        >
          Skills
          </NavLink>
        
        <NavLink exact activeClassName="active" to="/contact"

          className="
          hover:bg-black
          hover:text-white
          py-2 transition duration-500 rounded 
"
        >
          Contact Me
          </NavLink>
      </nav>
    </div>
  );
}
