import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="text-white">
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
        <div>
          <Image
            src="/my-app.jpeg"
            className="rounded-md"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
