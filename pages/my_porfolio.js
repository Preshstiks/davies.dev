import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="text-white pt-[50px]">
      <div className="pb-5">
        <h1 className="text-4xl font-bold text-center pb-8">Portfolio</h1>
        <div className="border-cyan-300 border-b-4 mx-auto w-[40px] rounded-sm"></div>
      </div>
      <div>
        <p className="text-sm text-center px-[10%] pt-[40px] pb-10 leading-8 xs:text-lg">
          Here are a few of the client and personal projects I've worked on that
          include well-designed responsive sites.
        </p>
      </div>
      <div>
        <div className="py-4 mx-[6%] px-5 rounded-md my-2 bg-gray-800 flex items-center gap-6 overflow-auto">
          <Image
            src="/my-app.jpeg"
            className="rounded-md w-[300px]"
            width={300}
            height={300}
          />
          <div>
            <p className="my-5">
              This is a simple landing page done with NextJs, and tailwind CSS.
            </p>
            <button className="py-3 px-4 hover:bg-cyan-600 bg-cyan-300 text-black font-bold rounded-md">
              <a href="https://cartify-sable.vercel.app/" target="_blank">
                Check it out
              </a>
            </button>
          </div>
        </div>
        <div className="py-4 mx-[6%] px-5 rounded-md my-2 bg-gray-800 flex items-center gap-6 overflow-auto">
          <Image
            src="/codinghub.jpeg"
            className="rounded-md w-[300px]"
            width={300}
            height={300}
          />
          <div>
            <p className="my-5">
              This is a similar clone to medium.com. Not everything works
              though, since i had to implement firebase to store data.
            </p>
            <button className="py-3 px-4 hover:bg-cyan-600 bg-cyan-300 text-black font-bold rounded-md">
              <a href="https://codinghub.vercel.app/" target="_blank">
                Check it out
              </a>
            </button>
          </div>
        </div>
        <div className="py-4 px-5 rounded-md my-2 bg-gray-800 overflow-auto">
          <Image
            src="/my-app.jpeg"
            className="rounded-md w-[300px]"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
