import { ServiceOverViewData } from "@/index";
import React from "react";

const OverView = ({
  overViewData,
  subTitle,
}: {
  overViewData: ServiceOverViewData;
  subTitle: string;
}) => {
  const { heading, para } = overViewData;
  return (
    <section
      id="overview"
      className="w-full flex items-center justify-center max-h-fit"
    >
      <div className="flex w-full md:flex-row flex-col max-md:gap-6 items-center justify-between ">
        <div className="flex flex-col gap-6 items-start md:max-w-xl md:px-3">
          <h3 className="text-accent font-semibold md:leading-[100%] md:text-xl  text-base">
            {subTitle}
          </h3>

          <h1 className="text-primary font-medium md:text-4xl  text-2xl md:leading-[100%] ">
            {heading}
          </h1>
        </div>

        <div
          className="flex items-start gap-3 flex-col md:max-w-xl md:text-lg text-base text-muted leading-6 font-normal
        "
        >
          <p>{para}</p>
         
        </div>
      </div>
    </section>
  );
};

export default OverView;
