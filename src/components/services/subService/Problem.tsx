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
    <div className="flex md:flex-row flex-col md:justify-between ">
      <div className=" w-1/2">
        <div className="w-4/5 flex flex-col gap-6 items-start">
          <h3 className="font-semibold text-xl text-accent leading-7 ">
            Problem
          </h3>
          <h1 className="text-primary text-wrap text-4xl font-medium leading-[100%]">
            {heading}
          </h1>
        </div>
      </div>

      <div className="w-1/2">
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
