import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="bg-black pt-5 h-screen overflow-auto px-[13%] flex flex-col justify-between">
      <div>
        <Navbar />
        {children}
      </div>
      <div className="flex flex-col items-center">
        <Footer />
      </div>
    </div>
  );
};
