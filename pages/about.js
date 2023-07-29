import { myImage } from "@/components/assets/images";
import Image from "next/image";
const About = () => {
  return (
    <div className="text-white py-11">
      <div className="pb-5">
        <h1 className="text-4xl font-bold">About Me</h1>
      </div>
      <div className="w-full relative">
        <Image
          src="/portfolio_bg_img.jpg"
          width={1000}
          height={300}
          alt="bg_img"
          className="object-cover h-[250px] w-full rounded-t-3xl"
        />
        <div className="absolute z-0 bottom-[-50px] left-[50px]">
          <Image
            className="rounded-full border-8 border-black"
            src={myImage}
            width={200}
            height={200}
            alt="myImage"
          />
        </div>
      </div>
      <div className="pt-[60px] pb-10">
        <p className="text-[22px] font-medium">
          Hi, My Name is Davies Precious. I am a Javascript software developer
          based in Abuja, Nigeria. I studied Project Management in Federal
          University of Technology, Minna. I enjoy building web applications and
          love learning new stuffs. I'm open to Job opportunities where I can
          contribute, learn and grow. If you have a good opportunity that
          matches my skills and experience then don't hesitate to contact me.
        </p>
      </div>
      <div className="pb-8">
        <div className="pt-11 pb-5">
          <h1 className="text-4xl font-bold">My skills</h1>
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="bg-gray-800 py-3 px-4 rounded-lg">HTML / CSS</div>
          <div className="bg-gray-800 py-3 px-4 rounded-lg">Javascript</div>
          <div className="bg-gray-800 py-3 px-4 rounded-lg">ReactJS</div>
          <div className="bg-gray-800 py-3 px-4 rounded-lg">NextJS</div>
          <div className="bg-gray-800 py-3 px-4 rounded-lg">React Query</div>
          <div className="bg-gray-800 py-3 px-4 rounded-lg">Redux</div>
          <div className="bg-gray-800 py-3 px-4 rounded-lg">Tailwind CSS</div>
          <div className="bg-gray-800 py-3 px-4 rounded-lg">Firebase</div>
          <div className="bg-gray-800 py-3 px-4 rounded-lg">Git</div>
          <div className="bg-gray-800 py-3 px-4 rounded-lg">GitHub</div>
        </div>
      </div>
    </div>
  );
};

export default About;
