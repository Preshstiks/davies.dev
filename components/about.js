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

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              I’m a frontend developer from Abuja with a focus on responsive
              design, clean interactions, and lightweight code. I enjoy turning
              ideas into user-friendly web interfaces that are easy to use and
              simple to maintain.
            </p>
            <div className="mt-8 space-y-4 text-sm leading-7 text-gray-500 sm:text-base">
              <p>
                I design and build high-performance websites and web apps that
                solve real user problems. I combine modern frontend tools with
                practical thinking to deliver experiences that load fast, adapt
                to any screen, and behave predictably across devices. My focus
                is on solutions: I analyze user needs, simplify complex flows,
                and craft interfaces that guide people to their goals with
                minimal friction. I use clear structure, consistent spacing, and
                purposeful motion that reinforces usability without causing
                distraction, so every interaction feels intuitive and reliable.
                In summary, I turn product questions into elegant, maintainable
                frontends that deliver measurable value.
              </p>
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
