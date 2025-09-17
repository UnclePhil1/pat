import React from "react";
import DM from "../../public/images/dm.png";
import Growth from "../../public/images/grow.svg";
import Group from "../../public/images/group.png";
import Educate from "../../public/images/educate.png";

const steps = [
  {
    img: DM,
    number: 1,
    header: "In Private DMs",
    progress: 40,
    points: [
      "Sends updates, announcements, airdrops, referral campaigns, etc.",
      "Lets members talk privately with your team safely.",
      "Collects emails, feedback, and suggestions for growth.",
    ],
  },
  {
    img: Growth,
    number: 2,
    header: "Community Growth & Insights",
    progress: 40,
    points: [
      "Shows members how many people use PAT boosts trust and excitement.",
      "Tracks referrals and campaign results.",
      "Collects community feedback to improve your project.",
    ],
  },
  {
    img: Group,
    number: 3,
    header: "In Your Group",
    progress: 40,
    points: [
      "24/7 moderation: bans spam, foul words, and bad links.",
      "Auto-responds to questions instantly {< 8 secs}",
      "Welcomes new members and guides them through your project",
    ],
  },
  {
    img: Educate,
    number: 4,
    header: "Guides & Education",
    progress: 40,
    points: [
      "Explains utilities of the project like staking, minting, and other utilities in simple steps to aid onboarding",
      "Breaks down your whitepaper into bite-sized Q&A.",
      "Reminds users about campaigns, tasks, and updates to keep them engaged.",
    ],
  },
];

const HowItWorks: React.FC = () => (
  <div className="flex flex-col justify-center items-center gap-8 w-full mt-8">
    <header>
      <h1 className="text-white font-bold text-3xl m-0">How PAT Works</h1>
    </header>
    <p className="text-white text-md m-0 text-center">
      Lets show you how PAT works
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="bg-priary border p-2 border-secondary/20 rounded-lg flex flex-col items-start justify-start h-full"
        >
          <img
            src={step.img}
            alt={step.header}
            className="self-start mt-4 w-16 h-16"
          />
          <h2 className="text-white font-normal text-2xl mt-4 py-2 flex items-center gap-2">
            <span className="text-white font-bold text-2xl">
              {step.number}.
            </span>{" "}
            {step.header}
          </h2>
          <div className="w-full my-2">
            <div className="h-[2px] bg-gray-700 rounded-full relative">
              <div
                className="h-[2px] bg-secondary rounded-full"
                style={{ width: `${step.progress}%` }}
              ></div>
            </div>
          </div>
          <ul className="space-y-2 mt-2 w-full">
            {step.points.map((point, i) => (
              <li key={i} className="text-white flex items-start gap-2">
                <span className="inline-block w-2 h-2 bg-secondary rounded-full mt-2"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
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

export default HowItWorks;
