import React from "react";

const SolutionCard = ({
  solutions,
}: {
  solutions: {
    heading: string;
    para: string;
    conclusion: string[];
  };
}) => {
  const { conclusion, heading, para } = solutions;
  return (
    <div className=" max-w-[34rem] min-w-60 ">
      <div className="bg-white rounded-2xl border  border-border  p-6 flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-3">
          <h1 className="text-accent leading-7 font-medium text-2xl">
            {heading}
          </h1>
          <p className="text-muted text-base leading-6">{para}</p>
        </div>

          <div className="h-px w-full bg-border"/>

        <div className="flex flex-col gap-3 items-start">
          <h2 className="text-primary text-xl leading-6 font-medium">
            👉🏻 They Includes
          </h2>
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            {conclusion.map((item, index) => (
              <li className="text-muted text-base leading-6" key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
