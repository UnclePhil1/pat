import React from "react";
import Hello from "../../public/images/reach.png";
import Share from "../../public/images/share.png";
import Stage from "../../public/images/stage.png";
import Add from "../../public/images/add.png";

const Setup: React.FC = () => (
  <div className="flex flex-col justify-center items-center gap-8 w-full mt-8">
    <header>
      <h1 className="text-white font-bold text-3xl m-0">How To Setup PAT</h1>
    </header>
    <p className="text-white text-md m-0 text-center">
      Getting PAT into your community is super simple
    </p>
    {/* First Flex: 2 grid columns */}
    <div className="w-full flex justify-center items-stretch gap-6 mt-8">
      <div className="grid grid-cols-2 gap-6 w-full">
        <div className="bg-priary border p-2 border-secondary/20 rounded-lg flex flex-col items-start justify-start">
          <h2 className="text-white font-normal text-xl py-2">
            Reach Out
          </h2>
          <p className="text-white font-thin p-2">
           Tell us you want your community to be PAT&apos;s new home.
          </p>
          <img src={Hello} alt="Safe" className="self-center" />
        </div>
        <div className="bg-priary border p-2 border-secondary/20 rounded-lg flex flex-col items-start justify-start">
          <h2 className="text-white font-normal text-xl py-2">Share Your Project</h2>
          <p className="text-white font-thin p-2">
           Give us all the info about what you&apos;re building. We&apos;ll feed this to PAT and keep her updated with every future project change.
          </p>
          <img src={Share} alt="Safe" className="self-center" />
        </div>
      </div>
    </div>
    {/* Second Flex: 3 grid columns, middle largest */}
    <div className="w-full flex justify-center items-stretch gap-6 mt-8">
      <div className="grid grid-cols-2 gap-6 w-full">
        <div className="bg-priary border p-2 border-secondary/20 rounded-lg flex flex-col items-start justify-start">
          <h2 className="text-white font-normal text-xl py-2">PAT Takes the Stage</h2>
          <p className="text-white font-thin p-2">
            We set up PAT, and she takes your project&apos;s name she&apos;s now married to your dream.
          </p>
          <img src={Stage} alt="Safe" className="self-center" />
        </div>
        <div className="bg-priary border p-2 border-secondary/20 rounded-lg flex flex-col items-start justify-start">
          <h2 className="text-white font-normal text-xl py-2">
            Add PAT to Your Community
          </h2>
          <p className="text-white font-thin p-2">
            Watch as your community thrives with smart moderation, instant responses, and loyal engagement.
          </p>
          <img src={Add} alt="Safe" className="self-center" />
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

export default Setup;
