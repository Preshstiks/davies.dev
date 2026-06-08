import Image from "next/image";
import { FaGithub, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import myImage from "../components/assets/avatar.png";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

const socialLinks = [
  {
    href: "https://github.com/preshstiks",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/precious-davies-1786a9238",
    label: "LinkedIn",
    icon: BsLinkedin,
  },
  {
    href: "https://instagram.com/preshstiks",
    label: "Instagram",
    icon: AiFillInstagram,
  },
  {
    href: "https://twitter.com/DaviesPreciou12",
    label: "Twitter",
    icon: FaTwitterSquare,
  },
  {
    href: "https://www.facebook.com/davies.precious.10?mibextid=ZbWKwL",
    label: "Facebook",
    icon: GrFacebook,
  },
];

const Hero = () => {
  const CV_URL = "/CV_Davies_Precious.pdf";

  const downloadResume = () => {
    const filename = CV_URL.split("/").pop();
    const link = document.createElement("a");
    link.href = CV_URL;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const { themeToggle } = useContext(ThemeContext);
  const textColor = themeToggle ? "text-dark" : "text-lighttext";
  const accent = themeToggle ? "text-darkcyan" : "text-cyan";
  const border = themeToggle ? "border-darkcyan" : "border-cyan";

  return (
    <section className={`font-anta pt-[140px] ${textColor} px-[10%]`}>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 md:flex-row md:items-center">
        <div className="md:w-7/12">
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${border} text-gray-400`}
          >
            frontend engineer
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            I build polished web experiences that feel fast, modern, and
            intuitive.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            I turn design intent into responsive React applications, focusing on
            clear interaction, lightweight layout, and smooth delivery across
            devices.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={downloadResume}
              className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${accent} border-current hover:bg-current/10`}
            >
              Download CV
            </button>
            <a
              href="#projects"
              className="text-sm font-semibold text-gray-300 transition hover:text-cyan"
            >
              View projects
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-full border-4 border-white/10 bg-slate-950/5 shadow-2xl sm:h-[340px] sm:w-[340px]">
          <Image
            src={myImage}
            alt="Davies Precious"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1180px] justify-center gap-4 text-gray-400 sm:justify-start">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg transition hover:bg-white/10 hover:text-cyan"
            aria-label={label}
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
