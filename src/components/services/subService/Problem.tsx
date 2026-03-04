import CustomLi from "@/components/common/CustomLi";
import React from "react";

const Problem = ({
  heading,
  solutions = [],
}: {
  heading: string;
  solutions: { title: string; para: string }[];
}) => {
  return (
    <div className="flex md:flex-row flex-col max-md:gap-6 md:justify-between ">
      <div className=" md:w-1/2 w-full">
        <div className="md:w-4/5 w-full flex flex-col gap-6 items-start">
          <h3 className="font-semibold text-xl text-accent leading-7 ">
            Problem
          </h3>
          <h1 className="text-primary text-wrap md:text-4xl text-2xl font-medium md:leading-[100%]">
            {heading}
          </h1>
        </div>
      </div>

      <div className="md:w-1/2 w-full">
        <ul className="flex flex-col gap-8 items-start">
          {solutions.map((solution, index) => (
            <CustomLi data={solution} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Problem;
