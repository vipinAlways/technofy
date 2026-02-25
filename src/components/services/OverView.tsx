import { ServiceOverViewData } from "@/index";
import React from "react";

const OverView = ({ overViewData }: { overViewData: ServiceOverViewData }) => {
  const { heading, para1, para2 } = overViewData;
  return (
    <section
      id="overView"
      className="w-full flex items-center justify-center max-h-fit"
    >
      <div className="flex w-full md:flex-row flex-col max-md:gap-6 items-center justify-between ">
        <div className="flex flex-col gap-6 items-start md:w-1/2">
          <h3 className="text-accent font-medium md:leading-[100%] md:text-xl text-lg">
            Service OverView
          </h3>

          <h1 className="text-primary font-medium md:text-4xl text-2xl leading-[100%]">
            {heading}
          </h1>
        </div>

        <div
          className="flex items-start gap-3 flex-col md:max-w-1/2 md:text-lg text-sm text-muted leading-6 font-normal
        "
        >
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
      </div>
    </section>
  );
};

export default OverView;
