import React from "react";
import Logo from "../../public/images/logow.svg";
import { Button } from "./ui/button";
import EjectIcon from "@mui/icons-material/Eject";

const Navbar = () => {
  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Back to top button state
  const [showTop, setShowTop] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > window.innerHeight * 1.5);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center">
        <img src={Logo} alt="Pat logo" className="w-20 h-20" />

        <ul className="flex-row gap-4 justify-center items-center hidden lg:flex">
          <li
            className="uppercase text-lg text-white cursor-pointer"
            onClick={() => handleScroll("problem")}
          >
            Problem
          </li>
          <li
            className="uppercase text-lg text-white cursor-pointer"
            onClick={() => handleScroll("solution")}
          >
            Solution
          </li>
          <li
            className="uppercase text-lg text-white cursor-pointer"
            onClick={() => handleScroll("howitworks")}
          >
            How we work
          </li>
          <li
            className="uppercase text-lg text-white cursor-pointer"
            onClick={() => handleScroll("founders")}
          >
            Merits
          </li>
          <li
            className="uppercase text-lg text-white cursor-pointer"
            onClick={() => handleScroll("waitlist")}
          >
            Contact
          </li>
        </ul>

        <div className="space-x-4 flex">
          <Button
            variant="outline"
            className="outline-primary text-white font-thin text-lg cursor-pointer hidden lg:flex"
            onClick={() => handleScroll("howitworks")}
          >
            How to Use
          </Button>
          <Button
            className="bg-secondary font-thin text-lg cursor-pointer"
            onClick={() => handleScroll("waitlist")}
          >
            Get Waitlist
          </Button>
        </div>
      </div>
      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-secondary text-white p-2 rounded-full flex items center self-center w-12 h-12 shadow-lg z-50 transition-all duration-300 hover:bg-primary justify-center"
        >
          <EjectIcon className="self-center items-center" />
        </button>
      )}
    </>
  );
};

export default Navbar;
