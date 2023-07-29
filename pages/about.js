import { myImage } from "@/components/assets/images";
import Image from "next/image";
const About = () => {
  return (
    <div className="text-white pt-11">
      <div className="pb-5">
        <h1 className="text-4xl font-bold">About Me</h1>
      </div>
      <div className="w-full relative">
        <Image
          src="/portfolio_bg_img.jpg"
          width={1000}
          height={300}
          alt="bg_img"
          className="object-cover h-[200px] w-full rounded-t-3xl"
        />
        <div className="absolute bottom-[-95px] left-[50px]">
          <Image
            className="rounded-full border-8 border-black"
            src={myImage}
            width={200}
            height={200}
            alt="myImage"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
