import CTA from "@/components/common/CTA";
import HowItWorks from "@/components/common/HowItWorks";
import FAQ from "@/components/services/FAQ";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {children}
      <div className="w-full">
        <div className="w-full bg-accent/10">
          <div className="max-w-7xl mx-auto md:px-16 px-6 flex justify-center">
            <FAQ />
          </div>
        </div>

        <div className="w-full pb-24 ">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:px-16 px-6 gap-24 items-stretch">
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
