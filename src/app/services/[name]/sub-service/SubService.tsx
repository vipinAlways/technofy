import HeroSection from "@/components/common/HeroSection";
import HowItWorks from "@/components/common/HowItWorks";
import ServiceSection from "@/components/common/ServiceSection";
import WhyCard from "@/components/common/WhyCard";
import Problem from "@/components/services/subService/Problem";
import SolutionCard from "@/components/services/subService/SolutionCard";
import { Button } from "@/components/ui/button";
import { ServiceHeroSection } from "@/index";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const heroSeciton: ServiceHeroSection = {
  button: "Schedule a Free Security Assessment",
  heading: "Advanced Endpoint Security That Protects Every Device",
  image: "/images/hero-background.png",
  para: "We secure laptops, desktops, and mobile devices with proactive threat detection, real-time monitoring, and rapid incident response — ensuring your business stays protected against modern cyber threats.",
};
const SubService = ({
  serivceName,
  data,
}: {
  serivceName: string;
  data: any;
}) => {
  return (
    <div className="w-full flex flex-col gap-24 items-center">
      <section
        id="#hero"
        className={
          "relative w-full h-screen bg-[url('/images/hero-background.png')] bg-cover bg-center flex  justify-center  items-center"
        }
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/*  */}
        <div className="pointer-events-none absolute left-0 right-0 -bottom-4 h-16 bg-linear-to-b from-black/0 to-white blur-xl" />
        {/* Content */}
        <div className="flex items-start max-w-7xl w-full  md:px-14 px-6">
          <div
            className={
              "relative z-10 text-white flex  justify-center items-start w-[70%] flex-col gap-8"
            }
          >
            <div className="text-start gap-3">
              <h1 className="text-5xl leading-17 font-bold text-white">
                Advanced {serivceName} That <br />
                Protects Every Device
              </h1>
              <p className="text-lg  leading-7 text-muted-foreground">
                We secure laptops, desktops, and mobile devices with proactive
                threat detection, real-time monitoring, and rapid incident
                response — ensuring your business stays protected against modern
                cyber threats.
              </p>
            </div>

            <Button
              className="px-6 py-4 font-semibold text-lg leading-[100%]"
              asChild
            >
              <Link href={"/contact"} className="flex items-center gap-4">
                Schedule a Free Security Assessment
                <MoveRightIcon className="size-6" />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="md:max-w-7xl w-full mx-auto flex flex-col md:px-14 px-6 items-stretch">
        <Problem
          heading={data.problem.heading}
          solutions={data.problem.solutions}
        />
      </div>
      <div className="w-full bg-accent/10 py-10">
        <div className="max-w-7xl mx-auto md:px-14 px-6 space-y-4">
          <h3 className="text-accent text-xl leading-7 text-center">
            Solution
          </h3>
          <ServiceSection
            id="service"
            data={{
              heading: `Our ${serivceName} Architecture`,
              para: "Enterprise-grade technology solutions designed to empower your business at every stage.",
            }}
          >
            <div className="flex flex-wrap gap-4 items-stretch max-w-full w-full ">
              {data.solution &&
                data.solution.map((item: any, index: any) => {
                  return <SolutionCard key={index} solutions={item} />;
                })}
            </div>
          </ServiceSection>
        </div>
      </div>

      <div className="md:max-w-7xl pb-24 w-full mx-auto flex flex-col md:px-14 px-6 gap-24 items-stretch">
        <WhyCard whyCardData={data.whySection} className="flex-row-reverse" />
        <HowItWorks id="howItworks" />
      </div>
    </div>
  );
};

export default SubService;
