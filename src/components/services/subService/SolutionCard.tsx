import React from "react";

const SolutionCard = ({
  solutions,
}: {
  solutions: {
    heading: string;
    description: string;
    includes: {
      data: string[];
    };
  };
}) => {
  const { includes, heading, description } = solutions;

  return (
    <div className=" lg:max-w-[39rem] min-w-60  ">
      <div className="bg-white rounded-2xl border  border-border  p-6 flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-3">
          <h1 className="text-accent md:leading-7 font-medium md:text-2xl text-xl">
            {heading}
          </h1>
          <p className="text-muted text-base leading-6">{description}</p>
        </div>

        <div className="h-px w-full bg-border" />

        <div className="flex flex-col gap-3 items-start">
          <h2 className="text-primary md:text-xl text-lg leading-6 font-medium flex gap-2 items-center">
            <img
              src="/images/hand.png"
              alt={heading}
              className="w-7 h-7"
            />{" "}
            They Includes
          </h2>
          <ul className="flex flex-col gap-2 pl-5 list-disc">
            {includes.data.map((item, index) => (
              <li className="text-muted text-base leading-6" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
