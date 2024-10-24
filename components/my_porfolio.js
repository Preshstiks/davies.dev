import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

const Portfolio = () => {
  const { themeToggle } = useContext(ThemeContext);
  return (
    <>
      <div
        id={"projects"}
        className={`pt-[140px] font-anta ${
          themeToggle ? "text-dark" : "text-lighttext"
        }`}
      >
        <div className="pb-5">
          <h1 className="text-4xl font-bold text-center pb-8">Projects</h1>
          <div
            className={`border-b-4 mx-auto w-[40px] rounded-sm ${
              themeToggle ? "border-darkcyan" : "border-cyan"
            }`}
          ></div>
        </div>
        <div
          className={`grid md:grid-cols-2 grid-cols-1 gap-4 py-[50px] mt-10 px-[10%] ${
            themeToggle ? " bg-lightbox" : "bg-darksecondary"
          }`}
        >
          <div className="p-4 flex flex-col items-center">
            <div>
              <Image
                src="/my-app.jpeg"
                className="rounded-md w-[500px]"
                width={300}
                height={300}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[25px]">Cartify</h1>
                <a href="https://cartify-sable.vercel.app/" target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="my-5 text-sm leading-8 xs:text-base">
                This is a simple landing page done to perfect my frontend
                development skills.
              </p>
              <div className="flex space-x-3 sm:text-[12px] text-[10px] text-gray-500">
                <h1>NextJs</h1>
                <h1>Framer motion</h1>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div>
              <Image
                src="/codinghub.jpeg"
                className="rounded-md w-[500px]"
                width={300}
                height={300}
              />
            </div>
            <div className="p-3 ">
              <div className="flex items-center justify-between">
                <h1 className="text-[25px]">Coding Hub</h1>
                <a href="https://codinghub.vercel.app/" target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="my-5 text-sm leading-8 xs:text-base">
                This is a simple clone of medium.com. Doesn't complete have all
                the features but has similar features with medium.com.
              </p>
              <div className="flex space-x-3 sm:text-[12px] text-[10px] text-gray-500">
                <h1>NextJs</h1>
                <h1>Firebase</h1>
                <h1>Redux</h1>
                <h1>Framer motion</h1>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div>
              <Image
                src="/portfolio.png"
                className="rounded-md w-[500px]"
                width={300}
                height={300}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[25px]">My Portfolio</h1>
                <a href="https://davies-dev.vercel.app/" target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="my-5 text-sm leading-8 xs:text-base">
                This simple portfolio was made to showcase all the projects that
                i've done in time passed.
              </p>
              <div className="flex space-x-3 sm:text-[12px] text-[10px] text-gray-500">
                <h1>NextJs</h1>
                <h1>Framer motion</h1>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div>
              <Image
                src="/eleven36.webp"
                className="rounded-md w-[500px]"
                width={300}
                height={300}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[25px]">Eleven 36</h1>
                <a href="https://eleven36.vercel.app/" target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="my-5 text-sm leading-8 xs:text-base">
                This Project is a portfolio website for a tech firm created with
                ReactJS,and other animation javascript packages that gave the
                website a very good look.
              </p>
              <div className="flex space-x-3 sm:text-[12px] text-[10px] text-gray-500">
                <h1>ReactJs</h1>
                <h1>Framer motion</h1>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div>
              <Image
                src="/rawbeauty.png"
                className="rounded-md w-[500px]"
                width={300}
                height={300}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[25px]">Raw Beauty E-commerce App</h1>
                <a
                  href="https://rawbeautyafricafrontend.vercel.app/"
                  target="_blank"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="my-5 text-sm leading-8 xs:text-base">
                This Project is an E-commerce web application that users can use
                to purchase skincare products.
              </p>
              <div className="flex space-x-3 sm:text-[12px] text-[10px] text-gray-500">
                <h1>NextJs</h1>
                <h1>Framer motion</h1>
                <h1>Context API</h1>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div>
              <Image
                src="/cwc.webp"
                className="rounded-md w-[500px]"
                width={300}
                height={300}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[25px]">
                  Childcare & Wellness Clinics Website
                </h1>
                <a
                  href="https://www.childcarewellnessclinics.com/"
                  target="_blank"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="my-5 text-sm leading-8 xs:text-base">
                This is a website for a clinic, made with simple Html, CSS and
                Javascript.
              </p>
              <div className="flex space-x-3 sm:text-[12px] text-[10px] text-gray-500">
                <h1>HTML</h1>
                <h1>CSS</h1>
                <h1>Javascript</h1>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div>
              <Image
                src="/wealth.webp"
                className="rounded-md w-[500px]"
                width={300}
                height={300}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[25px]">Wealthwave</h1>
                <a href="https://wealthwave-ochre.vercel.app/" target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="my-5 text-sm leading-8 xs:text-base">
                This is a simple dashboard created with ReactJS, it has a very
                captivating UI especially the color combination.
              </p>
              <div className="flex space-x-3 sm:text-[12px] text-[10px] text-gray-500">
                <h1>ReactJS</h1>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div>
              <Image
                src="/silade.webp"
                className="rounded-md w-[500px]"
                width={300}
                height={300}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[25px]">Silade Agro Club website</h1>
                <a href="https://agriculture-fawn.vercel.app/" target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="my-5 text-sm leading-8 xs:text-base">
                This is a simple agricultural landing page created with NextJS.
              </p>
              <div className="flex space-x-3 sm:text-[12px] text-[10px] text-gray-500">
                <h1>NextJS</h1>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div>
              <Image
                src="/esebeloved.webp"
                className="rounded-md w-[500px]"
                width={300}
                height={300}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[25px]">Esebeloved Ministry Website</h1>
                <a href="https://esebelovedministry.org/" target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="my-5 text-sm leading-8 xs:text-base">
                This is a simple Ministry landing page created with NextJS with
                cool animation, i created the backend for the contact us form,
                backend development is not my speciality though, i just know
                little about it.
              </p>
              <div className="flex space-x-3 sm:text-[12px] text-[10px] text-gray-500">
                <h1>NextJS</h1>
                <h1>PHP Laravel</h1>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div>
              <Image
                src="/miko.webp"
                className="rounded-md w-[500px]"
                width={300}
                height={300}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[25px]">Miko Website</h1>
                <a href="https://miko-gamma.vercel.app/" target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="my-5 text-sm leading-8 xs:text-base">
                This is a simple and single landing page created with NextJS.
              </p>
              <div className="flex space-x-3 sm:text-[12px] text-[10px] text-gray-500">
                <h1>NextJS</h1>
              </div>
            </div>
          </div>
          {/* 
          <div className="p-4 flex flex-col items-center">
            <div>
              <Image
                src="/project.png"
                className="rounded-md w-[500px]"
                width={300}
                height={300}
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h1 className="text-[25px]">Property Law firm</h1>
                <a href="https://propertylaw.vercel.app/" target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="my-5">
                This landing page was built for a law firm using NextJs,
                Framermotion and other cool packages.
              </p>
              <div className="flex space-x-3 text-[12px] text-gray-500">
                <h1>NextJs</h1>
                <h1>Framer motion</h1>
              </div>
            </div>
          </div>
          <div className="minilg:py-4 py-[50px] mx-[6%] minilg:px-5 px-[10%] minilg:flex-row flex-col rounded-md my-2 bg-gray-800 flex items-center gap-6 overflow-auto">
            <Image
              src="/porti.png"
              className="rounded-md w-[300px]"
              width={300}
              height={300}
            />
            <div>
              <p className="my-5">
                This is a simple portfolio website done using Chakra UI and
                NextJs.
              </p>
              <button className="py-3 px-4 hover:bg-cyan-600 bg-cyan-300 text-black font-bold rounded-md">
                <a href="https://miko-gamma.vercel.app/" target="_blank">
                  Check it out
                </a>
              </button>
            </div>
          </div>
          <div className="minilg:py-4 py-[50px] mx-[6%] minilg:px-5 px-[10%] minilg:flex-row flex-col rounded-md my-2 bg-gray-800 flex items-center gap-6 overflow-auto">
            <Image
              src="/project.png"
              className="rounded-md w-[300px]"
              width={300}
              height={300}
            />
            <div>
              <p className="my-5">
                This landing page was built for a law firm using NextJs,
                Framermotion and other cool packages.
              </p>
              <button className="py-3 px-4 hover:bg-cyan-600 bg-cyan-300 text-black font-bold rounded-md">
                <a href="https://propertylaw.vercel.app/" target="_blank">
                  Check it out
                </a>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
