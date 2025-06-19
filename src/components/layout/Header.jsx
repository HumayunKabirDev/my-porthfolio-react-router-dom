import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* ✅ Fixed Navbar */}
      <div className="fixed top-2 left-0 w-full bg-primaryC shadow-md z-50 px-5">
        <div className="max-w-mContainer  mx-auto navbar rounded-2xl">
          {/* Navbar Start */}
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 bg-bgColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              {/* ✅ Dropdown for mobile */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-primaryC rounded-box text-white text-[14px] font-bold space-y-2">
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>HOME</a>
                </li>
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>SKILLS</a>
                </li>
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>SERVICES</a>
                </li>
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>PROJECTS</a>
                </li>
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>REVIEWS</a>
                </li>
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>CONTACT</a>
                </li>
              </ul>
            </div>
            <h3 className="text-[22px] text-white font-bold">
              HUMA<span className="text-buttonC">YUN</span>
            </h3>
          </div>

          {/* Navbar Center (Desktop only) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-x-5 text-white text-[14px] font-bold">
              <Link to="/">
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>HOME</a>
                </li>
              </Link>

              <Link to="/MySkill">
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>SKILLS</a>
                </li>
              </Link>

              <Link to="/MyServices">
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>SERVICES</a>
                </li>
              </Link>

              <Link to="/Projects">
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>PROJECTS</a>
                </li>
              </Link>

              <Link to="/Testimonials">
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>REVIEWS</a>
                </li>
              </Link>

              <Link to="/Contact">
                <li className="hover:text-buttonC after:content-[''] after:block after:w-0 after:h-[2px] after:bg-bgColor after:transition-all after:duration-300 hover:after:w-full">
                  <a>CONTACT</a>
                </li>
              </Link>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end  ">
            <button className="bg-buttonC py-3 px-6 text-white font-bold text-[14px] rounded-full hover:scale-105 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
