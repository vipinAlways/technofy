import CTA from "@/components/common/CTA";
import HowItWorks from "@/components/common/HowItWorks";
import FAQ from "@/components/services/FAQ";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {children}
      <div className="w-full space-y-24">
        <div className="w-full bg-accent-foreground">
          <div className="md:max-w-7xl  lg:px-0 px-6 mx-auto  flex justify-center">
            <FAQ />
          </div>
        </div>

        <div className="w-full pb-24 ">
          <div className="md:max-w-7xl  lg:px-0 px-6 mx-auto w-full flex flex-col  gap-24 items-stretch">
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
