import React from "react";
import Save from "../../public/images/save.svg";
import Users from "../../public/images/users.svg";
import Grows from "../../public/images/grow.svg";
import Build from "../../public/images/shild.svg";
import Scale from "../../public/images/scale.svg";
import Boost from "../../public/images/boost.svg";

const steps = [
  {
    img: Save,
    header: "Saves Time",
    points: [
      "No more answering the same questions over and over.",
    ],
  },
  {
    img: Users,
    header: "Keeps Users",
    points: [
      "Reminders, campaigns, and guides mean members stay active."
    ],
  },
  {
    img: Grows,
    header: "Grows Communities",
    points: [
      "Referral tracking and DM campaigns bring new users in."
    ],
  },
  {
    img: Build,
    header: "Builds Trust",
    points: [
      "Private DMs and quick responses make your project feel professional.",
    ],
  },
  {
    img: Scale,
    header: "Scales Easily",
    points: [
      "Works for 100 users or 10,000—PAT handles it all.",
    ],
  },
  {
    img: Boost,
    header: "Boosts Engagement",
    points: [
      "Interactive Q&A and instant support make your community lively and fun.  ",
    ],
  },
];

const Founders: React.FC = () => (
  <div className="flex flex-col justify-center items-center gap-8 w-full mt-8">
    <header>
      <h1 className="text-white font-bold text-3xl m-0"> Why Founders Love PAT</h1>
    </header> 
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-b from-[#161A2B] to-[#2563EB] rounded-lg flex flex-col items-start justify-start h-full p-2"
        >
          <img
            src={step.img}
            alt={step.header}
            className="self-start mt-4 w-16 h-16"
          />
          <h2 className="text-white font-bold text-2xl mt-4 py-2 flex items-center gap-2">
            {step.header}
          </h2>
          <div className="space-y-2 mt-2 w-full">
            {step.points.map((point, i) => (
              <p key={i} className="text-white flex items-start gap-2">
                <span>{point}</span>
              </p>
            ))}
          </div>
        </div>
      ))}
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

export default Founders;
