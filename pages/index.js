import Hero from "@/components/Hero";
import Head from "next/head";
import About from "../components/about";
import Portfolio from "@/components/my_porfolio";
import { Navbar } from "@/components/Navbar";
import ContactMe from "@/components/contact_me";
import { Footer } from "@/components/Footer";
const Home = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>Davies Precious</title>
      </Head>
      <>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <ContactMe />
        <Footer />
      </>
    </div>
  );
};
export default Home;
