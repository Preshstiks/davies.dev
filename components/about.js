import Image from "next/image";
import Img from "../components/assets/workplace.jpeg";
import Icon1 from "../components/assets/skillIcon/html.png";
import Icon2 from "../components/assets/skillIcon/css.png";
import Icon3 from "../components/assets/skillIcon/javascript.png";
import Icon4 from "../components/assets/skillIcon/react.png";
import Icon5 from "../components/assets/skillIcon/nextjs.svg";
import Icon6 from "../components/assets/skillIcon/reactquery.svg";
import Icon7 from "../components/assets/skillIcon/tailwind.svg";
import Icon8 from "../components/assets/skillIcon/chakraui.png";
import Icon9 from "../components/assets/skillIcon/git.svg";
import Icon10 from "../components/assets/skillIcon/github.png";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
const About = () => {
  const { themeToggle } = useContext(ThemeContext);
  return (
    <div id={"about"} className="py-[140px]  px-[10%]">
      <div
        className={`font-anta ${themeToggle ? "text-dark" : "text-lighttext"}`}
      >
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-[30%] md:pb-0 pb-10">
            <Image
              className="rounded-[8px] w-[300px] h-[300px]"
              src={Img}
              alt="img"
            />
          </div>
          <div className="md:w-[60%]">
            <div className="pb-5">
              <h1 className="text-4xl font-bold pb-8">About Me</h1>
              <div
                className={`border-b-4 w-[40px] rounded-sm ${
                  themeToggle ? "border-darkcyan" : "border-cyan"
                }`}
              ></div>
            </div>
            <div>
              <p className="text-sm leading-8 xs:text-lg">
                I am a Javascript software developer based in Abuja, Nigeria. I
                studied Project Management in Federal University of Technology,
                Minna. I enjoy building web applications and love learning new
                stuffs. I'm open to Job opportunities where I can contribute,
                learn and grow. If you have a good opportunity that matches my
                skills and experience then don't hesitate to contact me.
              </p>
            </div>
          </div>
        </div>
        <div className="py-[60px]">
          <div className="pt-11 pb-5">
            <h1 className="text-4xl font-bold">My skills</h1>
          </div>
          <div className="flex gap-4 flex-wrap sm:text-base text-xs">
            <div
              className={`py-3 px-4 rounded-lg flex items-center space-x-2 ${
                themeToggle ? "bg-lightbox" : "bg-darkbox"
              }`}
            >
              <div className="bg-[#e5592e80] p-1 rounded-[5px]">
                <Image className="w-5 h-5" src={Icon1} alt="icon" />
              </div>
              <div>HTML</div>
            </div>
            <div
              className={`py-3 px-4 rounded-lg flex items-center space-x-2 ${
                themeToggle ? "bg-lightbox" : "bg-darkbox"
              }`}
            >
              <div className="bg-[#167cf982] p-1 rounded-[5px]">
                <Image className="w-5 h-5" src={Icon2} alt="icon" />
              </div>
              <div>CSS</div>
            </div>
            <div
              className={`py-3 px-4 rounded-lg flex items-center space-x-2 ${
                themeToggle ? "bg-lightbox" : "bg-darkbox"
              }`}
            >
              <div className="bg-[#e9c84483] p-1 rounded-[5px]">
                <Image className="w-5 h-5" src={Icon3} alt="icon" />
              </div>
              <div>Javascript</div>
            </div>
            <div
              className={`py-3 px-4 rounded-lg flex items-center space-x-2 ${
                themeToggle ? "bg-lightbox" : "bg-darkbox"
              }`}
            >
              <div className="bg-[#67dcf974] p-1 rounded-[5px]">
                <Image className="w-5 h-5" src={Icon4} alt="icon" />
              </div>
              <div>ReactJS</div>
            </div>
            <div
              className={`py-3 px-4 rounded-lg flex items-center space-x-2 ${
                themeToggle ? "bg-lightbox" : "bg-darkbox"
              }`}
            >
              <div className="bg-[#00000043] p-1 rounded-[5px]">
                <Image className="w-5 h-5" src={Icon5} alt="icon" />
              </div>
              <div>NextJS</div>
            </div>
            <div
              className={`py-3 px-4 rounded-lg flex items-center space-x-2 ${
                themeToggle ? "bg-lightbox" : "bg-darkbox"
              }`}
            >
              <div className="bg-[#fd445778] p-1 rounded-[5px]">
                <Image className="w-5 h-5" src={Icon6} alt="icon" />
              </div>
              <div>React Query</div>
            </div>
            <div
              className={`py-3 px-4 rounded-lg flex items-center space-x-2 ${
                themeToggle ? "bg-lightbox" : "bg-darkbox"
              }`}
            >
              <div className="bg-[#67dcf974] p-1 rounded-[5px]">
                <Image className="w-5 h-5" src={Icon4} alt="icon" />
              </div>
              <div>Context Api</div>
            </div>
            <div
              className={`py-3 px-4 rounded-lg flex items-center space-x-2 ${
                themeToggle ? "bg-lightbox" : "bg-darkbox"
              }`}
            >
              <div className="bg-[#67dcf974] p-1 rounded-[5px]">
                <Image className="w-5 h-5" src={Icon7} alt="icon" />
              </div>
              <div>Tailwind CSS</div>
            </div>
            <div
              className={`py-3 px-4 rounded-lg flex items-center space-x-2 ${
                themeToggle ? "bg-lightbox" : "bg-darkbox"
              }`}
            >
              <div className="bg-[#67dcf974] p-1 rounded-[5px]">
                <Image className="w-5 h-5" src={Icon8} alt="icon" />
              </div>
              <div>Chakra UI</div>
            </div>
            <div
              className={`py-3 px-4 rounded-lg flex items-center space-x-2 ${
                themeToggle ? "bg-lightbox" : "bg-darkbox"
              }`}
            >
              <div className="bg-[#e5592e80] p-1 rounded-[5px]">
                <Image className="w-5 h-5" src={Icon9} alt="icon" />
              </div>
              <div>Git</div>
            </div>
            <div
              className={`py-3 px-4 rounded-lg flex items-center space-x-2 ${
                themeToggle ? "bg-lightbox" : "bg-darkbox"
              }`}
            >
              <div className="bg-[#00000043] p-1 rounded-[5px]">
                <Image className="w-5 h-5" src={Icon10} alt="icon" />
              </div>
              <div>GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
