import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { CiLight } from "react-icons/ci";
import { Link as ScrollLink } from "react-scroll";
import { IoMoonSharp } from "react-icons/io5";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggleMenu = () => {
    setShow(!show);
  };
  const [toggleTheme, SetToggleTheme] = useState(false);
  const handleToggleTheme = () => {
    SetToggleTheme((prevState) => !prevState);
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
  const router = useRouter();
  return (
    <div
      id={"navbar"}
      className="fixed top bg-black nav-shadow py-3 left-0 right-0 px-[10%]"
    >
      <div className="flex items-center justify-between text-slate-200">
        <div>
          <h1 className="sm:text-[50px] text-black py-4 px-3 rounded-[8px] bg-white text-4xl cursor-pointer font-black">
            <Link href="/">DP</Link>
          </h1>
        </div>
        <div onClick={handleToggleMenu} className="text-2xl xmd:hidden">
          {show ? (
            <AiOutlinePlus className="transform rotate-45 font-bold text-2xl" />
          ) : (
            <AiOutlineMenu className="font-bold" />
          )}
        </div>
        {/* <AnimatePresence>
          {show && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="text-[#333366] font-anta shadow-sm shadow-stone-300 md:text-left text-center font-normal absolute md:hidden left-[10%] top-[110px] bg-white w-[80%] py-6 rounded-xl"
            >
              <div className="hover:text-cyan-300 mb-5 cursor-pointer pb-1.5">
                <Link href="/about">About</Link>
              </div>
              <div className="hover:text-cyan-300 mb-5 cursor-pointer pb-1.5">
                <Link href="/my_porfolio">Projects</Link>
              </div>
              <div className="hover:text-cyan-300 mb-5 cursor-pointer pb-1.5">
                <Link href="/contact_me">Contact Me</Link>
              </div>
              <div>
                <CiLight />
              </div>
              {/* </div> */}
        {/* </motion.div>
          )} */}
        {/* </AnimatePresence> */}
        <div className="sm:text-sm md:text-base font-anta xmd:flex gap-9 hidden items-center font-medium">
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
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={"contact" === "jobs" ? -40 : 0}
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
            Contact Us
          </ScrollLink>
          <div onClick={handleToggleTheme}>
            {toggleTheme ? (
              <div className="p-2 bg-gray-400 text-[black] rounded-full cursor-pointer">
                <IoMoonSharp size={24} />
              </div>
            ) : (
              <div className="p-2 bg-gray-900 rounded-full cursor-pointer">
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
