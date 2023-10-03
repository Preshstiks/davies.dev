import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggleMenu = () => {
    setShow(!show);
  };
  const router = useRouter();
  return (
    <div className="flex items-center pt-7 justify-between text-slate-200">
      <div>
        <h1 className="sm:text-[50px] text-4xl cursor-pointer font-black">
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
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="text-[#333366] shadow-sm shadow-stone-300 md:text-left text-center font-normal absolute md:hidden left-[10%] top-[110px] bg-white w-[80%] py-6 rounded-xl"
          >
            <div className="hover:text-cyan-300 mb-5 cursor-pointer pb-1.5">
              <Link href="/">{"< Home >"}</Link>
            </div>
            <div className="hover:text-cyan-300 mb-5 cursor-pointer pb-1.5">
              <Link href="/about">{"< About Me >"}</Link>
            </div>
            <div className="hover:text-cyan-300 mb-5 cursor-pointer pb-1.5">
              <Link href="/my_porfolio">{"< Portfolio >"}</Link>
            </div>
            <button className="py-2 px-4 text-base rounded-md bg-black border-[0.1px] hover:bg-white hover:text-black hover:border-black hover:border-[0.1px] text-white">
              <Link href="/contact_me">Contact Me</Link>
            </button>
            {/* </div> */}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="sm:text-sm md:text-base xmd:flex gap-9 hidden items-center font-medium">
        <div
          className={
            router.pathname === "/"
              ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
              : "cursor-pointer pb-1.5"
          }
        >
          <Link href="/">{"< Home >"}</Link>
        </div>
        <div
          className={
            router.pathname === "/about"
              ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
              : "cursor-pointer pb-1.5"
          }
        >
          <Link href="/about">{"< About Me >"}</Link>
        </div>
        <div
          className={
            router.pathname === "/my_portfolio"
              ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
              : "cursor-pointer pb-1.5"
          }
        >
          <Link href="/my_porfolio">{"< Portfolio >"}</Link>
        </div>
        <button className="md:py-2 hover:border-[0.1px] border-[0.1px] hover:border-cyan-300 hover:bg-black hover:text-cyan-300 md:px-4 py-2 px-2.5 text-sm md:text-base rounded-md bg-cyan-300 text-black">
          <Link href="/contact_me">Contact Me</Link>
        </button>
      </div>
    </div>
  );
};
