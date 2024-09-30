import React, { useEffect, useState } from "react";
import logo from "../../public/b_clogo.png";
import { MdPersonOutline } from "react-icons/md";

const Navbar = () => {
  const [isSticky,setSticky]=useState(false);
  //handle scroll functions
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a>Menu</a>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul class="p-2">
            <li>
              <a>Online Order</a>
            </li>
            <li>
              <a>Take Away</a>
            </li>
            <li>
              <a>Dine-in</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offer</a>
      </li>
    </>
  );
  return (
    <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out" : ""}`} style={{backgroundColor:"white"}}>
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="" className="w-64 h-37" />
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div class="navbar-end">

        {/* search btn */}
        <button className="btn btn-ghost btn-circle hidden lg:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
          {/* cart items */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle mr-3 md:flex hidden items-center justify-center "
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>

          
          {/* btn */}
          <a className="btn bg-pink rounded-full px-6 text-white flex items-center gap-2">
            <MdPersonOutline /> Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
