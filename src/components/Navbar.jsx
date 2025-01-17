import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const mainControls = useAnimation();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showNavbar) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
      setIsOpen(false);
    }
  }, [showNavbar]);

  function handleNavbar() {
    setIsOpen(!isOpen);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  const links = [
    {
      tag: "Home",
    },
    {
      tag: "Amenities",
      path: "/amenities#amenities",
    },
    {
      tag: "Menu",
      path: "/menu#menu",
    },
    {
      tag: "About",
      path: "/about#about",
    },
    {
      tag: "Contact",
      path: "/contact#contact",
    },
  ];

  return (
    <>
      <motion.header 
        className="fixed top-0 w-full border-b-[1px] border-white bg-green font-serif z-10"
        variants={{
          hidden: { y: -75 },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75 }}
      >
        <div className="flex items-center justify-between max-w-[1240px] h-14 mx-auto px-4 text-white">
          <h1 className="text-3xl font-bold cursor-pointer">Logo</h1>

          <nav className="hidden items-center gap-8 md:flex">
            <ul className="flex gap-3 ">
              {links.map((link, index) =>
                link.tag === "Home" ? (
                  <li
                    key={index}
                    onClick={scrollToTop}
                    className="cursor-pointer transition hover:text-whiteHover"
                  >
                    {link.tag}
                  </li>
                ) : (
                  <li
                    key={index}
                    className="cursor-pointer transition hover:text-whiteHover"
                  >
                    <BrowserRouter>
                      <HashLink smooth to={link.path}>
                        {link.tag}
                      </HashLink>
                    </BrowserRouter>
                  </li>
                )
              )}
            </ul>

            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare
                  size={20}
                  className="cursor-pointer transition hover:text-whiteHover"
                />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={20}
                  className="cursor-pointer transition hover:text-whiteHover"
                />
              </a>
            </div>
          </nav>

          <div className="block md:hidden" onClick={handleNavbar}>
            {isOpen ? (
              <AiOutlineClose
                size={20}
                className="cursor-pointer transition hover:text-whiteHover"
              />
            ) : (
              <AiOutlineMenu
                size={20}
                className="cursor-pointer transition hover:text-whiteHover"
              />
            )}
          </div>
        </div>
      </motion.header>

      <nav
        className={`fixed top-2 flex flex-col items-center w-screen gap-6 mt-12 py-6 border-b-[1px] border-white bg-green font-serif text-white transform transition-transform md:hidden ${
          isOpen ? "opacity-100 z-10" : "opacity-0 z-[-10]"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <ul className="flex flex-col gap-3 text-center">
          {links.map((link, index) => (
            link.tag === "Home" ? (
              <li
                key={index}
                onClick={scrollToTop}
                className="cursor-pointer transition hover:text-whiteHover"
              >
                {link.tag}
              </li>
            ) : (
              <li
                key={index}
                className="cursor-pointer text-lg transition hover:text-whiteHover"
              >
                <BrowserRouter>
                  <HashLink smooth to={link.path}>
                    {link.tag}
                  </HashLink>
                </BrowserRouter>
              </li>
            )
          ))}
        </ul>

        <div className="flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare
              size={20}
              className="cursor-pointer transition hover:text-whiteHover"
            />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={20}
              className="cursor-pointer transition hover:text-whiteHover"
            />
          </a>
        </div>
      </nav>
    </>
  );
}
