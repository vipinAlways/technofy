import CTA from "@/components/common/CTA";
import CustomLi from "@/components/common/CustomLi";
import OverView from "@/components/common/OverView";
import ServiceSection from "@/components/common/ServiceSection";
import WhyCard from "@/components/common/WhyCard";
import { Button } from "@/components/ui/button";
import { WhycardData } from "@/index";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const vision = [
  {
    data: [
      {
        title: "Proactive IT Management",
        para: "Continuously monitor and optimize systems to prevent disruptions before they occur.",
      },
      {
        title: "Enterprise-Grade Security",
        para: "Implement layered cybersecurity strategies to protect networks, devices, and data.",
      },
      {
        title: "Scalable Infrastructure Design",
        para: "Build flexible IT environments that support long-term growth and evolving needs.",
      },
      {
        title: "Operational Reliability",
        para: "Ensure stable, high-performance systems that minimize downtime and business risk..",
      },
    ],
  },
  {
    data: [
      {
        title: "Trusted Technology Partnership",
        para: "Continuously monitor and optimize systems to prevent disruptions before they occur.",
      },
      {
        title: "Innovation with Purpose",
        para: "Implement layered cybersecurity strategies to protect networks, devices, and data.",
      },
      {
        title: "Digital Resilience",
        para: "Build flexible IT environments that support long-term growth and evolving needs.",
      },
      {
        title: "Sustainable Growth Enablement",
        para: "Ensure stable, high-performance systems that minimize downtime and business risk..",
      },
    ],
  },
];

const WhyCardData: WhycardData = {
  image: "/images/about-why.png",
  fetures: [
    {
      title: "Proactive Excellence",
      para: "We align every technology solution with your business objectives — not just technical requirements.",
    },
    {
      title: "Security-First Mindset",
      para: "Our solutions grow with your business, ensuring long-term performance and flexibility.",
    },
    {
      title: "Long-Term Partnership",
      para: "Our solutions grow with your business, ensuring long-term performance and flexibility.",
    },
    {
      title: "Structured Transparency",
      para: "No hidden costs. Clear communication and pricing you can trust.",
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
        className="relative w-full h-screen bg-[url('/images/about-hero.png')] bg-cover bg-center flex  justify-center"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/*  */}
        <div className="pointer-events-none absolute left-0 right-0 -bottom-4 h-16 bg-linear-to-b from-black/0 to-white blur-xl" />
        {/* Content */}
        <div
          className={
            "relative z-10 text-white flex  justify-center  items-center flex-col max-w-5xl w-full gap-8"
          }
        >
          <div className="text-center gap-3">
            <h1 className="text-6xl leading-[4.25rem] font-bold text-white">
              Building Secure & Scalable IT Foundations
            </h1>
            <p className="text-lg  leading-7 text-muted-foreground">
              Technofy delivers proactive IT management, cybersecurity
              protection, and scalable infrastructure solutions designed to
              support growing businesses. We help organizations operate
              securely, efficiently, and confidently in an evolving digital
              landscape.
            </p>
          </div>

          <Button
            className="px-6 py-4 font-semibold text-lg leading-[100%]"
            asChild
          >
            <Link href={"/contact"} className="flex items-center gap-4">
              Get a Free Consultation <MoveRightIcon className="size-6" />{" "}
            </Link>
          </Button>
        </div>
      </section>

      <div className="w-full">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:px-14 px-6 md:gap-24 gap-12 items-stretch">
          <OverView
            subTitle="About Technofy"
            overViewData={{
              heading:
                "Delivering Structured, Secure IT Solutions for Growing Businesses",
              para1:
                "Technofy is an IT services partner committed to delivering reliable, secure, and performance-driven technology solutions. We work closely with businesses to strengthen their IT infrastructure, protect critical assets, and ensure operational continuity.",
              para2:
                "Through proactive management and strategic planning, we design environments that minimize risk, reduce downtime, and support long-term growth.",
            }}
          />
        </div>
      </div>

      <div className="w-full bg-accent/10 py-10">
        <div className="max-w-7xl mx-auto md:px-14 px-6 space-y-4">
          <h3 className="text-accent text-xl leading-7 text-center">
            Solution
          </h3>
          <ServiceSection
            id="service"
            data={{
              heading: `Our Mission & Vision`,
              para: "We are driven by a clear purpose and a long-term outlook — delivering secure, scalable IT solutions today while building a foundation for sustainable digital growth tomorrow.",
            }}
          >
            <div className="flex flex-wrap gap-4 items-stretch max-w-full w-full ">
              {vision.map((item, index: any) => {
                return (
                  <div className=" max-w-xl w-full" key={index}>
                    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8 w-full">
                      <h2 className="text-accent font-semibold text-xl">
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

      <div className="md:max-w-7xl w-full mx-auto flex flex-col md:px-14 px-6 gap-24 items-stretch">
        <WhyCard whyCardData={WhyCardData} />
        <CTA />
      </div>
    </div>
  );
};

export default Page;
