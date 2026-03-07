import React from "react";

const CustomLi = ({
  data,
}: {
  data: { problem: string; solution: string };
}) => {
  return (
    <li className=" flex  items-start justify-start md:gap-4 gap-2">
    <img src="/images/hand.png" alt={data.problem}  className="md:w-8 md:h-8 w-6 h-6"/>
      <div className="space-y-2">
        <h3 className="font-semibold  md:text-xl text-primary text-lg md:leading-7">
          {data.problem}
        </h3>
        <p className="md:text-base text-base font-normal text-muted md:leading-6 ">
          {data.solution}
        </p>
      </div>
    </li>
  );
};

export default CustomLi;
