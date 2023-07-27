import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center pt-7 justify-between text-slate-200">
      <div>
        <h1 className="sm:text-[50px] text-4xl cursor-pointer font-black">
          <Link href="/">DP</Link>
        </h1>
      </div>
      <div className=" text-2xl sm:hidden">
        <AiOutlineMenu />
      </div>
      <div className="sm:text-sm hidden md:text-base sm:flex gap-9 font-medium">
        <span
          className={
            router.pathname === "/"
              ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          <Link href="/">{"< Home >"}</Link>
        </span>
        <span
          className={
            router.pathname === "/about"
              ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          <Link href="/about">{"< About Me >"}</Link>
        </span>
        <span
          className={
            router.pathname === "/portfolio"
              ? "border-b-2 pb-1.5 border-cyan-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          <Link href="/portfolio">{"< Portfolio >"}</Link>
        </span>
      </div>
    </div>
  );
};
