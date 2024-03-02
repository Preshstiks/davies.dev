import Image from "next/image";
import { FaUserCircle, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import myImage from "../components/assets/avatar.png";
const Hero = () => {
  return (
    <div className="text-slate-300 flex items-center justify-between h-screen font-anta px-[10%]">
      <div className="pt-[60px] w-[70%]">
        <h1 className="text-5xl py-1 xs:pb-2 xs:font-bold">HI! </h1>
        <h1 className="text-4xl py-1 xs:pb-2 xs:font-bold">
          MY NAME IS <span className="text-cyan-300">DAVIES PRECIOUS</span>
        </h1>
        <p className="text-sm leading-8 xs:text-lg">
          A Javascript Frontend developer focused in building the Frontend of
          Websites and Web Applications that leads to the success of the overall
          product, and equally find coding websites fun to do.
        </p>
        {/* <div className="xs:text-[30px] text-lg md:px-[10%] px-0 flex items-center justify-between py-10">
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
      <div className="">
        <Image
          className="rounded-full border-8 w-[250px] sm:w-[350px] border-black"
          src={myImage}
          alt="myImage"
        />
      </div>
    </div>
  );
};

export default Hero;
