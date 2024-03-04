import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { CiLight } from "react-icons/ci";
import { Link as ScrollLink } from "react-scroll";
import { IoMoonSharp } from "react-icons/io5";
import { ThemeContext } from "./context/ThemeContext";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggleMenu = () => {
    setShow(!show);
  };
  const routes = [
    {
      link: "home",
      text: "Home",
    },
    {
      link: "services",
      text: "Services",
    },
    {
      link: "work",
      text: "Work",
    },
    {
      link: "about",
      text: "About Us",
    },
    // You can add more routes here
  ];
  const { handleThemeToggle, themeToggle } = useContext(ThemeContext);
  const router = useRouter();
  // const { themeToggle } = useContext(ThemeContext);
  return (
    <div
      id={"navbar"}
      className={`fixed top nav-shadow py-3 left-0 right-0 px-[10%] ${
        themeToggle ? "text-dark bg-light" : "text-lighttext bg-dark"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1
            className={`sm:text-[50px] sm:py-4 sm:px-3 py-3 px-2 rounded-[8px] text-4xl cursor-pointer font-black ${
              themeToggle ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            <Link href="/">DP</Link>
          </h1>
        </div>
        <div onClick={handleToggleMenu} className="text-2xl xs:hidden">
          {show ? (
            <AiOutlinePlus className="transform rotate-45 font-bold text-2xl" />
          ) : (
            <AiOutlineMenu className="font-bold" />
          )}
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className={`font-anta shadow-sm shadow-stone-300 md:text-left text-center font-normal absolute xs:hidden left-[10%] top-[110px] bg-white w-[80%] py-6 rounded-xl ${
                themeToggle
                  ? "text-lighttext bg-dark"
                  : "text-dark bg-lighttext"
              }`}
            >
              <div className="p-4">
                <ScrollLink
                  onClick={() => setShow(false)}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={"about" === "jobs" ? -40 : 0}
                  duration={500}
                  activeClass="active"
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "8px",
                    paddingBottom: "10px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = "none";
                  }}
                >
                  About
                </ScrollLink>
              </div>
              <div className="p-4">
                <ScrollLink
                  to="projects"
                  spy={true}
                  onClick={() => setShow(false)}
                  smooth={true}
                  offset={"projects" === "jobs" ? -40 : 0}
                  duration={500}
                  activeClass="active"
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "8px",
                    paddingBottom: "10px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecoration = "none";
                  }}
                >
                  Projects
                </ScrollLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="text-sm md:text-base font-anta xs:flex gap-9 hidden items-center font-medium">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={"about" === "jobs" ? -40 : 0}
            duration={500}
            activeClass="active"
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "8px",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={"projects" === "jobs" ? -40 : 0}
            duration={500}
            activeClass="active"
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "8px",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            Projects
          </ScrollLink>

          <div onClick={handleThemeToggle}>
            {themeToggle ? (
              <div className="p-2 bg-gray-400 text-[black] rounded-full cursor-pointer">
                <IoMoonSharp size={24} />
              </div>
            ) : (
              <div
                onClick={handleToggleMenu}
                className="p-2 bg-gray-900 rounded-full cursor-pointer"
              >
                <CiLight size={24} />
              </div>
            )}
          </div>
        </div>
        {/* <div className="sm:text-sm md:text-base font-anta xmd:flex gap-9 hidden items-center font-medium">
          <div
            className={
              router.pathname === "/about"
                ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
                : "cursor-pointer pb-1.5"
            }
          >
            <Link href="/about">About</Link>
          </div>
          <div
            className={
              router.pathname === "/my_portfolio"
                ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
                : "cursor-pointer pb-1.5"
            }
          >
            <Link href="/my_porfolio">Projects</Link>
          </div>
          <div
            className={
              router.pathname === "/contact_me"
                ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
                : "cursor-pointer pb-1.5"
            }
          >
            Contact Me
          </div>
          <div className="p-2 bg-gray-900 rounded-full cursor-pointer">
            <CiLight size={24} />
          </div>
        </div> */}
      </div>
    </div>
  );
};
