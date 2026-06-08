import Image from "next/image";
import Img from "../components/assets/workplace.jpeg";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

const skills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Framer Motion",
  "Firebase",
  "Context API",
  "Git",
];

const About = () => {
  const { themeToggle } = useContext(ThemeContext);
  const textColor = themeToggle ? "text-dark" : "text-lighttext";
  const accent = themeToggle ? "text-darkcyan" : "text-cyan";

  return (
    <section id="about" className="pt-[140px] px-[10%]">
      <div className={`font-anta ${textColor}`}>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr] items-center">
          <div>
            <p
              className={`text-sm uppercase tracking-[0.28em] ${accent} text-gray-400`}
            >
              About me
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              I build thoughtful frontend experiences that feel fast and
              polished.
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              I’m a frontend developer from Abuja with a focus on responsive
              design, clean interactions, and lightweight code. I enjoy turning
              ideas into user-friendly web interfaces that are easy to use and
              simple to maintain.
            </p>
            <div className="mt-8 space-y-4 text-sm leading-7 text-gray-500 sm:text-base">
              <p>
                I work with modern frontend tools to build websites and web apps
                that load quickly, adapt fluidly to all screen sizes, and feel
                reliable on every device.
              </p>
              <p>
                My approach is practical: clear structure, consistent spacing,
                and subtle motion that supports the experience without
                overwhelming it.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 sm:text-sm">
              <span className="rounded-full bg-white/5 px-4 py-2">
                Responsive UI
              </span>
              <span className="rounded-full bg-white/5 px-4 py-2">
                Performance
              </span>
              <span className="rounded-full bg-white/5 px-4 py-2">
                Maintainable code
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px]">
            <Image
              src={Img}
              alt="Workspace"
              className="h-full w-full rounded-[28px] object-cover"
              width={640}
              height={640}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
