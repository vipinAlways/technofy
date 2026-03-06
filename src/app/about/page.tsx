import CTA from "@/components/common/CTA";
import CustomLi from "@/components/common/CustomLi";
import OverView from "@/components/common/OverView";
import ServiceSection from "@/components/common/ServiceSection";
import WhyCard from "@/components/common/WhyCard";
import { Button } from "@/components/ui/button";
import { WhycardData } from "@/index";
import Routes from "@/lib/route";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const vision = [
  {
    data: [
      {
        problem: "Proactive IT Management",
        solution: "Continuously monitor and optimize systems to prevent disruptions before they occur.",
      },
      {
        problem: "Enterprise-Grade Security",
        solution: "Implement layered cybersecurity strategies to protect networks, devices, and data.",
      },
      {
        problem: "Scalable Infrastructure Design",
        solution: "Build flexible IT environments that support long-term growth and evolving needs.",
      },
      {
        problem: "Operational Reliability",
        solution: "Ensure stable, high-performance systems that minimize downtime and business risk..",
      },
    ],
  },
  {
    data: [
      {
        problem: "Trusted Technology Partnership",
        solution: "Continuously monitor and optimize systems to prevent disruptions before they occur.",
      },
      {
        problem: "Innovation with Purpose",
        solution: "Implement layered cybersecurity strategies to protect networks, devices, and data.",
      },
      {
        problem: "Digital Resilience",
        solution: "Build flexible IT environments that support long-term growth and evolving needs.",
      },
      {
        problem: "Sustainable Growth Enablement",
        solution: "Ensure stable, high-performance systems that minimize downtime and business risk..",
      },
    ],
  },
];

const WhyCardData: WhycardData = {
  image: "/images/about-why.png",
  fetures: [
    {
      heading: "Proactive Excellence",
      description: "We align every technology solution with your business objectives — not just technical requirements.",
    },
    {
      heading: "Security-First Mindset",
      description: "Our solutions grow with your business, ensuring long-term performance and flexibility.",
    },
    {
      heading: "Long-Term Partnership",
      description: "Our solutions grow with your business, ensuring long-term performance and flexibility.",
    },
    {
      heading: "Structured Transparency",
      description: "No hidden costs. Clear communication and pricing you can trust.",
    },
  ],
  heading: "Our Core Values",
  para: "We combine technical excellence with a client-first approach to deliver solutions that truly make a difference.",
};

const Page = () => {
  return (
    <div className="w-full flex flex-col gap-24 items-center pb-24">
      <section
        id="#hero"
        className="relative w-full lg:h-[90vh]  md:h-[60vh] h-[75vh] lg:px-0 px-6 flex  justify-center"
      >
        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-[0.1rem] z-10
        "
        ></div>
        {/*  */}
       <div className="pointer-events-none absolute z-40 left-0 w-full -bottom-8 h-16  bg-white blur-md " />
        <div className="w-full h-full absolute top-0 left-0">
          <img
            src="/images/about-hero.png"
            alt=" Smart IT Solutions That Drive Business Growth"
            className="
          w-full h-full object-cover object-center -z-20"
            loading="eager"
          />
        </div>
        {/* Content */}
        <div
          className={
            "relative z-10 text-white flex  justify-center pt-10 items-center flex-col max-w-5xl w-full gap-8"
          }
        >
          <div className="text-center flex flex-col gap-3">
           <h1 className="md:text-6xl text-4xl md:leading-[4.25rem] font-bold text-white">
              Building Secure & Scalable IT Foundations
            </h1>
            <p className="md:text-lg text-base md:leading-7  text-muted-foreground ">
              Technofy delivers proactive IT management, cybersecurity
              protection, and scalable infrastructure solutions designed to
              support growing businesses. We help organizations operate
              securely, efficiently, and confidently in an evolving digital
              landscape.
            </p>
          </div>

          <Button
            className="px-8 py-6  font-semibold text-lg leading-[100%] rounded-[0.5rem]"
            asChild
          >
            <Link href={Routes.contact} className="flex items-center gap-4 ">
              Get a Free Consultation <MoveRightIcon className="size-6" />{" "}
            </Link>
          </Button>
        </div>
      </section>

      <div className="w-full">
        <div className="md:max-w-7xl  lg:px-0 px-6  mx-auto w-full flex flex-col  md:gap-24 gap-12 items-stretch">
          <OverView
            subTitle="About Technofy"
            overViewData={{
              heading:
                "Delivering Structured, Secure IT Solutions for Growing Businesses",
              para:
                "Technofy is an IT services partner committed to delivering reliable, secure, and performance-driven technology solutions. We work closely with businesses to strengthen their IT infrastructure, protect critical assets, and ensure operational continuity.",
              
            }}
          />
        </div>
      </div>

      <div className="w-full bg-accent-foreground py-10">
        <div className="md:max-w-7xl  lg:px-0 px-6  mx-auto  space-y-4">
          <ServiceSection
            id="service"
            data={{
              heading: `Our Mission & Vision`,
              para: "We are driven by a clear purpose and a long-term outlook — delivering secure, scalable IT solutions today while building a foundation for sustainable digital growth tomorrow.",
            }}
            className="md:items-center items-start"
          >
            <div className="flex flex-wrap gap-8 justify-center items-stretch  w-full ">
              {vision.map((item, index: any) => {
                return (
                  <div className="max-w-[39rem] w-full border " key={index}>
                    <div className="bg-white rounded-2xl border-border  p-6 flex flex-col gap-8 w-full">
                      <h2 className="text-accent font-semibold md:text-xl  text-base ">
                        Our Vision
                      </h2>
                      <ul className="flex flex-col justify-center gap-8">
                        {item.data.map((dd, index) => (
                          <CustomLi key={index} data={dd} />
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </ServiceSection>
        </div>
      </div>

      <div className="md:md:max-w-7xl  lg:px-0 px-6 w-full mx-auto flex flex-col  gap-24 items-stretch">
        <WhyCard whyCardData={WhyCardData} />
        <CTA />
      </div>
    </div>
  );
};

export default Page;
