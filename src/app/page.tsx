"use client";

import {
  Award,
  Building2,
  Cloud,
  Globe,
  Headset,
  HeadsetIcon,
  Lock,
  MoveRightIcon,
  Shield,
  TvMinimal,
  Users,
} from "lucide-react";
import {
  ServiceCardData,
  ServiceSectionData,
  StatsSection,
  WhycardData,
} from "..";
import ServiceSection from "@/components/common/ServiceSection";
import ServiceCard from "@/components/common/ServiceCard";
import WhyCard from "@/components/common/WhyCard";
import HowItWorks from "@/components/common/HowItWorks";
import CTA from "@/components/common/CTA";
import HeroSection from "@/components/common/HeroSection";
import { data as serviceCardData } from "./../services.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Routes from "@/lib/route";

const statsSectionData: StatsSection[] = [
  {
    icon: Award,
    numbers: "98%",
    title: "Client Satisfaction",
  },
  {
    icon: Building2,
    numbers: "100+",
    title: "Business Supported",
  },
  {
    icon: Headset,
    numbers: "24/7",
    title: "Expert Support",
  },
  {
    icon: Users,
    numbers: "10+",
    title: "Year Experience",
  },
];

const serviceData: ServiceSectionData = {
  heading: "Our Services",
  para: "Enterprise-grade technology solutions designed to empower your business at every stage.",
};

const whyCardData: WhycardData = {
  heading: " Why Businesses Trust Technofy",
  image: "/images/root-why.png",
  fetures: [
    {
      title: "Business-First Approach",
      para: "We align every technology solution with your business objectives — not just technical requirements.",
    },

    {
      title: "Business-First Approach",
      para: "We align every technology solution with your business objectives — not just technical requirements.",
    },

    {
      title: "Business-First Approach",
      para: "We align every technology solution with your business objectives — not just technical requirements.",
    },

    {
      title: "Business-First Approach",
      para: "We align every technology solution with your business objectives — not just technical requirements.",
    },
  ],
  para: "We combine technical excellence with a client-first approach to deliver solutions that truly make a difference.",
};
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <section
        id="#hero"
        className="relative w-full lg:h-[90vh]  md:h-[60vh] h-[75vh] bg-[url('/images/hero-background.png')] bg-cover bg-center flex justify-center"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[0.1rem]"></div>
        {/*  */}
        <div className="pointer-events-none absolute left-0 right-0 w-full -bottom-8 h-16 bg-gradient-to-b from-transparent via-white/40 to-white blur-xl" />
        {/* Content */}
        <div
          className={
            "relative z-10 text-white flex justify-center md:max-w-7xl  lg:px-0 px-6  items-center flex-col gap-8"
          }
        >
          <div className="text-center gap-3">
            <h1 className="md:text-6xl text-3xl md:leading-[4.25rem] font-bold text-white">
              Smart IT Solutions That Drive <br /> Business Growth
            </h1>
            <p className="md:text-lg text-sm md:leading-7  text-muted-foreground ">
              We design, secure, and manage your technology so you can focus on
              scaling your business
              <br />— without IT stress{" "}
            </p>
          </div>

          <Button
            className="px-8 py-6 font-semibold text-lg leading-[100%] rounded-[0.5rem]"
            asChild
          >
            <Link href={Routes.contact} className="flex items-center gap-2">
              Get a Free Consultation <MoveRightIcon className="w-6 h-6" />{" "}
            </Link>
          </Button>
        </div>
      </section>
      <div className="md:gap-20 gap-12 w-full md:max-w-7xl  lg:px-0 px-4 md:pb-24 pb-12 flex flex-col items-center">
        <section id="StatsSection" className="w-full">
          <div className="flex justify-between items-stretch min-w-full border-b border-border py-12">
            {statsSectionData.map((data, index) => (
              <div key={index} className="flex flex-col items-center gap-4 ">
                <data.icon className="w-8 h-8 text-muted stroke-[1.5px]" />

                <div className="gap-2 flex flex-col items-center">
                  <span className="text-accent md:text-[2rem] text-lg font-bold">
                    {data.numbers}
                  </span>
                  <span className="text-center text-muted md:text-lg text-sm md:leading-7 font-normal">
                    {data.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="py-10 ">
          <ServiceSection id="services" data={serviceData}>
            <div className="flex w-full flex-wrap gap-8 items-stretch justify-center">
              {serviceCardData.map((item) => {
                return (
                  <ServiceCard
                    key={item.heading}
                    cardData={{
                      heading: item.heading,
                      icon: item.icon,
                      para: item.para,
                      id: item.id,
                    }}
                    href={`/services/${item.heading
                      .replace(/\u00A0/g, "")
                      .replace(/\s+/g, "")
                      .trim()}`}
                  />
                );
              })}
            </div>
          </ServiceSection>
        </div>

        <WhyCard className="flex-row-reverse" whyCardData={whyCardData} />

        <HowItWorks id="howItWorks" />

        <CTA />
      </div>
    </div>
  );
}
