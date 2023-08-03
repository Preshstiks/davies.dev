import About from "@/pages/about";
import { Footer } from "./Footer";
import { HomeBody } from "./HomeBody";
import { Navbar } from "./Navbar";
import ContactMe from "@/pages/contact_me";
import Portfolio from "./Portfolio";

export const Layout = () => {
  return (
    <div className="bg-black pt-5 h-screen overflow-auto px-[13%] flex flex-col justify-between">
      <div>
        <Navbar />
      </div>
      <HomeBody />
      <About />
      <Portfolio />
      <ContactMe />
      <div className="flex flex-col items-center">
        <Footer />
      </div>
    </div>
  );
};
