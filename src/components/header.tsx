import PAT from "../../public/images/pat.png";
import "@/App.css";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center md:p-8">
      <img src={PAT} alt="Pat header" className="" />
      <div className="w-full border border-secondary rounded-lg bg-primary/10 glass p-4 md:p-6 flex flex-col justify-center items-center gap-4">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white text-md md:w-[30%]">
            PAT isn&apos;t just a bot she&apos;s part of your team. She makes
            your Telegram community fun, organized, and always growing without
            you burning out.
          </p>
          <p className="text-white text-md md:w-[30%]">
            PAT is your smart, loyal, always-on sidekick. She takes care of the
            boring, stressful parts of community management so you can focus on
            building the next big thing in Web3.
          </p>
        </div>
        <h1 className="text-3xl md:text-7xl text-white">
          Say Hello to <span className="font-bold">PAT</span>
        </h1>
        <Button className="bg-secondary font-thin text-lg cursor-pointer">
          Join the Beta Waitlist
        </Button>
      </div>
    </div>
  );
};

export default Header;
