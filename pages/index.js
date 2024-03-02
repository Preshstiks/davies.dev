import Hero from "@/components/Hero";
import Head from "next/head";
import About from "../components/about";
import Portfolio from "@/components/my_porfolio";
import { Navbar } from "@/components/Navbar";
const Home = () => {
  return (
    <div className="pb-12 bg-black">
      <Head>
        <title>Davies Precious</title>
      </Head>
      <>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
      </>
    </div>
  );
};
export default Home;
