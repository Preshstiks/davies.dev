import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
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
        <AiOutlineMenu />
      </div>
      <div className="hidden">
        <Link href="/"></Link>
        <Link href="/about"></Link>
        <Link href="/portfolio"></Link>
      </div>
      <div className="sm:text-sm hidden md:text-base xmd:flex gap-9 items-center font-medium">
        <span
          className={
            router.pathname === "/"
              ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
              : "cursor-pointer pb-1.5"
          }
        >
          <Link href="/">{"< Home >"}</Link>
        </span>
        <span
          className={
            router.pathname === "/about"
              ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
              : "cursor-pointer pb-1.5"
          }
        >
          <Link href="/about">{"< About Me >"}</Link>
        </span>
        <span
          className={
            router.pathname === "/portfolio"
              ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
              : "cursor-pointer pb-1.5"
          }
        >
          <Link href="/portfolio">{"< Portfolio >"}</Link>
        </span>
        <button className="md:py-2 md:px-4 py-2 px-2.5 text-sm md:text-base rounded-md bg-cyan-300 text-black">
          Contact Us
        </button>
      </div>
    </div>
  );
};
