import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
      <div id={"projects"} className="text-white pt-[140px] font-anta">
        <div className="pb-5">
          <h1 className="text-4xl font-bold text-center pb-8">Projects</h1>
          <div className="border-cyan-300 border-b-4 mx-auto w-[40px] rounded-sm"></div>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-gray-900 py-[50px] mt-10 px-[10%]">
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
              <p className="my-5">
                This is a simple landing page done to perfect my frontend
                development skills.
              </p>
              <div className="flex space-x-3 text-[12px] text-gray-500">
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
              <p className="my-5">
                This is a simple clone of medium.com. Doesn't complete have all
                the features but has similar features with medium.com.
              </p>
              <div className="flex space-x-3 text-[12px] text-gray-500">
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
                src="/portfolio.jpeg"
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
              <p className="my-5">
                This simple portfolio was made to showcase all the projects that
                i've done in time passed.
              </p>
              <div className="flex space-x-3 text-[12px] text-gray-500">
                <h1>NextJs</h1>
                <h1>Framer motion</h1>
              </div>
            </div>
          </div>
          {/* <div className="minilg:py-4 py-[50px] mx-[6%] minilg:px-5 px-[10%] rounded-md my-2 bg-gray-800 flex minilg:flex-row flex-col items-center gap-6 overflow-auto">
            <Image
              src="/codinghub.jpeg"
              className="rounded-md w-[300px]"
              width={300}
              height={300}
            />
            <div>
              <p className="my-5">
                This is a similar clone to medium.com. Not everything works
                though, since i had to implement firebase to store data. This
                was built with react query, NextJs, axios, firebase, redux and
                tailwind css.
              </p>
              <button className="py-3 px-4 hover:bg-cyan-600 bg-cyan-300 text-black font-bold rounded-md">
                <a href="https://codinghub.vercel.app/" target="_blank">
                  Check it out
                </a>
              </button>
            </div>
          </div>
          <div className="minilg:py-4 py-[50px] mx-[6%] minilg:px-5 px-[10%] minilg:flex-row flex-col rounded-md my-2 bg-gray-800 flex items-center gap-6 overflow-auto">
            <Image
              src="/portfolio.jpeg"
              className="rounded-md w-[300px]"
              width={300}
              height={300}
            />
            <div>
              <p className="my-5">
                This simple portfolio was built with NextJs and tailwindcss.
              </p>
              <button className="py-3 px-4 hover:bg-cyan-600 bg-cyan-300 text-black font-bold rounded-md">
                <a href="https://davies-dev.vercel.app/" target="_blank">
                  Check it out
                </a>
              </button>
            </div>
          </div>
          <div className="minilg:py-4 py-[50px] mx-[6%] minilg:px-5 px-[10%] minilg:flex-row flex-col rounded-md my-2 bg-gray-800 flex items-center gap-6 overflow-auto">
            <Image
              src="/easybank.png"
              className="rounded-md w-[300px]"
              width={300}
              height={300}
            />
            <div>
              <p className="my-5">
                This Project was provided by frontend mentors. I did this to
                strengthen my Frontend development skill with NextJs.
              </p>
              <button className="py-3 px-4 hover:bg-cyan-600 bg-cyan-300 text-black font-bold rounded-md">
                <a
                  href="https://preshstiks.github.io/easybank/"
                  target="_blank"
                >
                  Check it out
                </a>
              </button>
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
