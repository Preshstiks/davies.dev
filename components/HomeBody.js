import Image from "next/image";
import { FaUserCircle, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { myImage } from "./assets/images";
import Head from "next/head";
export const HomeBody = () => {
  return (
    <div className="pb-12">
      <Head>
        <title>Davies Precious</title>
      </Head>
      <div className="text-slate-300 pt-[80px]">
        <div className="w-full relative">
          <Image
            src="/portfolio_bg_img.jpg"
            width={1000}
            height={300}
            alt="bg_img"
            className="object-cover h-[250px] w-full rounded-t-3xl"
          />
          <div className="absolute z-0 bottom-[-50px] left-[50px]">
            <Image
              className="rounded-full border-8 border-black"
              src={myImage}
              width={200}
              height={200}
              alt="myImage"
            />
          </div>
        </div>
        <div className="pt-[60px]">
          <h1 className="text-4xl py-1 text-center xs:pb-2 xs:font-bold">
            HI! MY NAME IS DAVIES PRECIOUS
          </h1>
          <p className="text-sm text-center px-[10%] leading-8 xs:text-lg">
            A Javascript Frontend developer focused in building the Frontend of
            Websites and Web Applications that leads to the success of the
            overall product, and equally find coding websites fun to do.
          </p>
          {/* <div className="xs:text-[30px] text-lg flex items-center justify-between py-5">
            <div>
              <FaUserCircle className="cursor-pointer hover:text-cyan-500" />
            </div>
            <div>
              <a href="https://instagram.com/preshstiks" target="_blank">
                <AiFillInstagram className="cursor-pointer hover:text-cyan-500" />
              </a>
            </div>
            <div>
              <a href="https://github.com/preshstiks" target="_blank">
                <FaGithub className="cursor-pointer hover:text-cyan-500" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/precious-davies-1786a9238"
                target="_blank"
              >
                <BsLinkedin className="cursor-pointer hover:text-cyan-500" />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/DaviesPreciou12" target="_blank">
                <FaTwitterSquare className="cursor-pointer hover:text-cyan-500" />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/davies.precious.10?mibextid=ZbWKwL"
                target="_blank"
              >
                <GrFacebook className="cursor-pointer hover:text-cyan-500" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
