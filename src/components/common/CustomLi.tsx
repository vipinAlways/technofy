import React from "react";

const CustomLi = ({
  data,
}: {
  data: { title: string; para: string };
}) => {
  return (
    <li className=" flex  items-start justify-start gap-4">
      <span className="size-8">👉🏻</span>
      <div>
        <h3 className="font-semibold md:text-xl text-primary text-sm leading-7">
          {data.title}
        </h3>
        <p className="md:text-base text-xs font-normal text-muted md:leading-6 ">
          {data.para}
        </p>
      </div>
    </li>
  );
};

export default CustomLi;
