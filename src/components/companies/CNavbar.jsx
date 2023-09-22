import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import logo from "@/assets/logo.png";

const CNavbar = ({ darkMode, setDarkMode }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const links = [
    {
      id: 1,
      link: "/companies/home",
      name: "home",
    },
    {
      id: 2,
      link: "/companies/about",
      name: "about",
    },
    {
      id: 3,
      link: "/companies/services",
      name: "services",
    },
    {
      id: 4,
      link: "/companies/histories",
      name: "success histories",
    },
    {
      id: 5,
      link: "/companies/resources",
      name: "resources",
    },
    {
      id: 6,
      link: "/companies/contact",
      name: "contact",
    },
  ];

  return (
    <>
      <div className=" w-full h-16 bg-secondary text-white z-20  ">
        <div className="flex justify-between  md:gap-5 items-center max-w-screen-xl mx-auto px-8 h-full">
          <div className="hidden lg:flex items-center">
            <ul className="flex ">
              {links.map(({ id, link, name }) => (
                <Link key={id} to={link}>
                  <li className="p-4 uppercase duration-300 hover:text-white font-bold hover:scale-110 cursor-pointer">
                    {name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          <div className="flex items-center flex-row justify-center bg-white rounded-lg p-1  ">
            <img
              src={logo}
              alt=""
              className=" object-cover h-10 duration-300 shadow-xl cursor-pointer shadow-thSecondary hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full  text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-16 rounded-b-2xl bg-secondary" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link, name }) => (
            <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              key={id}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thPrimary">
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CNavbar;
