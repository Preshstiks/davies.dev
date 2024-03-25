import Image from "next/image";
import { FaUserCircle, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import myImage from "../components/assets/avatar.png";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
const Hero = () => {
  const CV_URL = "https://davies-dev.vercel.app/Davies_Precious_Resume.pdf";
  const download = (url) => {
    try {
      console.log("Downloading from URL:", url);
      const filename = url.split("/").pop();
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      console.log("Download successful!");
    } catch (error) {
      console.error("Error occurred during download:", error);
    }
  };
  const { themeToggle } = useContext(ThemeContext);
  return (
    <div
      className={`font-anta pt-[140px] ${
        themeToggle ? "text-dark" : "text-lighttext"
      }`}
    >
      <div className="flex md:flex-row px-[10%] flex-col-reverse items-center justify-between">
        <div className="pt-[60px] md:w-[70%]">
          <h1 className="sm:text-5xl text-4xl py-1 xs:pb-2 xs:font-bold">
            HI!{" "}
          </h1>
          <h1 className="sm:text-4xl text-3xl py-1 xs:pb-2 xs:font-bold">
            MY NAME IS{" "}
            <span className={`${themeToggle ? "text-darkcyan" : "text-cyan"}`}>
              DAVIES PRECIOUS
            </span>
          </h1>
          <p className="text-sm leading-8 xs:text-lg">
            A Javascript Frontend developer focused in building the Frontend of
            Websites and Web Applications that leads to the success of the
            overall product, and equally find coding websites fun to do.
          </p>
        </div>
        <div className="">
          <Image
            className="rounded-full border-8 w-[250px] sm:w-[350px] border-black"
            src={myImage}
            alt="myImage"
          />
        </div>
      </div>
      <div className="xs:text-[30px] text-lg px-[10%] flex items-center justify-between py-10">
        <div
          onClick={() => {
            download(CV_URL);
          }}
        >
          <FaUserCircle
            className={`cursor-pointer ${
              themeToggle ? "hover:text-darkcyan" : "hover:text-cyan"
            }`}
          />
        </div>
        <div>
          <a href="https://instagram.com/preshstiks" target="_blank">
            <AiFillInstagram
              className={`cursor-pointer ${
                themeToggle ? "hover:text-darkcyan" : "hover:text-cyan"
              }`}
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/preshstiks" target="_blank">
            <FaGithub
              className={`cursor-pointer ${
                themeToggle ? "hover:text-darkcyan" : "hover:text-cyan"
              }`}
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/precious-davies-1786a9238"
            target="_blank"
          >
            <BsLinkedin
              className={`cursor-pointer ${
                themeToggle ? "hover:text-darkcyan" : "hover:text-cyan"
              }`}
            />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/DaviesPreciou12" target="_blank">
            <FaTwitterSquare
              className={`cursor-pointer ${
                themeToggle ? "hover:text-darkcyan" : "hover:text-cyan"
              }`}
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/davies.precious.10?mibextid=ZbWKwL"
            target="_blank"
          >
            <GrFacebook
              className={`cursor-pointer ${
                themeToggle ? "hover:text-darkcyan" : "hover:text-cyan"
              }`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
