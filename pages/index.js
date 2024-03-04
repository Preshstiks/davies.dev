import Hero from "@/components/Hero";
import Head from "next/head";
import About from "../components/about";
import Portfolio from "@/components/my_porfolio";
import { Navbar } from "@/components/Navbar";
import ContactMe from "@/components/contact_me";
import { Footer } from "@/components/Footer";
import ThemeContextProvider, {
  ThemeContext,
} from "@/components/context/ThemeContext";
import { useContext } from "react";
const Home = () => {
  const { themeToggle } = useContext(ThemeContext);
  return (
    <div className={themeToggle ? "bg-light" : "bg-dark"}>
      <Head>
        <title>Davies Precious</title>
      </Head>
      <>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Footer />
      </>
    </div>
  );
};
export default Home;
