import React from "react";
import Safe from "../../public/images/safe.png";
import Easy from "../../public/images/easy.png";
import Engage from "../../public/images/engage.png";
import Smart from "../../public/images/smart.png";
import Data from "../../public/images/data.png";

const Solution: React.FC = () => (
  <div className="flex flex-col justify-center items-center gap-8 w-full mt-8">
    <header>
      <h1 className="text-white font-bold text-3xl m-0">The PAT Solution</h1>
    </header>
    <p className="text-white text-md m-0 text-center">
      PAT fixes all of that. She makes your Telegram community better.
    </p>
    {/* First Flex: 2 grid columns */}
    <div className="w-full flex justify-center items-stretch gap-6 mt-8">
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-priary border p-2 border-secondary/20 rounded-lg flex flex-col items-start justify-start">
          <h2 className="text-white font-normal text-xl py-2">
            Safe & Welcoming
          </h2>
          <p className="text-white text-start font-thin p-2">
            Auto-moderates your chat, bans bad content, welcomes new members.
          </p>
          <img src={Safe} alt="Safe" className="w-full h-full" />
        </div>
        <div className="bg-priary border p-2 border-secondary/20 rounded-lg flex flex-col items-start justify-start">
          <h2 className="text-white font-normal text-xl py-2">Easy to Use</h2>
          <p className="text-white text-start font-thin p-2">
            Guides newbies, explains whitepapers in simple Q&A, shares
            step-by-step tutorials.
          </p>
          <img src={Easy} alt="Safe" className="w-full h-full" />
        </div>
      </div>
    </div>
    {/* Second Flex: 3 grid columns, middle largest */}
    <div className="w-full flex justify-center items-stretch gap-6 mt-8">
      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-priary border p-2 border-secondary/20 rounded-lg flex flex-col items-start justify-start">
          <h2 className="text-white font-normal text-xl py-2">Data-Driven</h2>
          <p className="text-white text-start font-thin p-2">
            Tracks referrals, gathers member info for campaigns, and shows
            social proof.
          </p>
          <img src={Data} alt="Safe" className="self-center" />
        </div>
        <div className="bg-priary border p-2 border-secondary/20 rounded-lg flex flex-col items-start justify-start">
          <h2 className="text-white font-normal text-xl py-2">
            Smart & Fast
          </h2>
          <p className="text-white text-start font-thin p-2">
            Answers community questions about your project in less
            than 8 seconds.
          </p>
          <img src={Smart} alt="Safe" className="self-center" />
        </div>
        <div className="bg-priary border p-2 border-secondary/20 rounded-lg flex flex-col items-start justify-start">
          <h2 className="text-white font-normal text-xl py-2">
            Engaging & Loyal
          </h2>
          <p className="text-white text-start font-thin p-2">
            Sends updates, campaigns, and reminders directly to DMs or email.
          </p>
          <img src={Engage} alt="Safe" className="self-center" />
        </div>
      </div>
    </div>
    <style>
      {`
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}
    </style>
  </div>
);

export default Solution;
