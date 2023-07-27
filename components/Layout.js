import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="bg-black pt-5 h-screen px-[13%]">
      <Navbar />
      {children}
    </div>
  );
};
