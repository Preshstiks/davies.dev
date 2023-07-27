import Image from "next/image";
import { FaUserCircle, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { iconStyle } from "@/cssStyles/styles";
export const HomeBody = () => {
  return (
    <div className="text-slate-300 pt-[80px] grid grid-cols-1 md:grid-cols-2 place-items-center">
      <div className="xxs:w-[250px] xxs:h-[250px] w-[200px] h-[200px]">
        <Image
          className="xxs:w-[250px] xxs:h-[250px] w-[200px] h-[200px] border-[5px] rounded-full border-cyan-500"
          src="/profile_pic.jpeg"
          width={500}
          height={500}
          alt="profile"
        />
      </div>
      <div>
        <h1 className="text-2xl pb-1 xs:text-3xl xs:pb-2 xs:font-semibold">
          Hi, My Name is Davies Precious
        </h1>
        <h1 className="text-xl pb-3 xs:text-2xl xs:pb-3">
          I am a Frontend Developer.
        </h1>
        <p className="text-sm xs:text-base">
          I'm a passionate Javascript developer, and I find coding websites fun
          to do.
        </p>
        <div className="xs:text-[30px] text-lg flex items-center justify-between pt-5">
          <div>
            <FaUserCircle className={iconStyle} />
          </div>
          <div>
            <a href="https://instagram.com/preshstiks" target="_blank">
              <AiFillInstagram className={iconStyle} />
            </a>
          </div>
          <div>
            <a href="https://github.com/preshstiks" target="_blank">
              <FaGithub className={iconStyle} />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/precious-davies-1786a9238"
              target="_blank"
            >
              <BsLinkedin className={iconStyle} />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/DaviesPreciou12" target="_blank">
              <FaTwitterSquare className={iconStyle} />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/davies.precious.10?mibextid=ZbWKwL"
              target="_blank"
            >
              <GrFacebook className={iconStyle} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 font-light pb-7">
        &copy; Davies Precious 2023.
      </div>
    </div>
  );
};
