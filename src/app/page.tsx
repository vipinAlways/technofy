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

export const serviceCardIconMap = {
  Shield,
  Lock,
  TvMinimal,
  Globe,
  Cloud,
  HeadsetIcon,
};

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
    <div className="w-full">
      <section
        id="#hero"
        className="relative w-full h-screen bg-[url('/images/hero-background.png')] bg-cover bg-center flex  justify-center"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/*  */}
        <div className="pointer-events-none absolute left-0 right-0 -bottom-4 h-16 bg-linear-to-b from-black/0 to-white blur-xl" />
        {/* Content */}
        <div
          className={
            "relative z-10 text-white flex  justify-center flex-col gap-8"
          }
        >
          <div className="text-center gap-3">
            <h1 className="text-6xl leading-17 font-bold text-white">
              Smart IT Solutions That Drive <br /> Business Growth
            </h1>
            <p className="text-lg  leading-7 text-muted-foreground">
              We design, secure, and manage your technology so you can focus on
              scaling your business
              <br />— without IT stress{" "}
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
      <div className="space-y-22 px-20">
        <section id="StatsSection">
          <div className="flex justify-between items-stretch w-full border-b  border-border py-12 ">
            {statsSectionData.map((data, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <data.icon className="size-8 text-muted" />

                <div className="gap-2 flex flex-col items-center ">
                  <span className="text-accent text-[2rem] font-bold">
                    {data.numbers}
                  </span>
                  <span className="text-muted text-lg leading-7 font-normal">
                    {data.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ServiceSection id="services" data={serviceData}>
          <div className="flex flex-wrap gap-8 items-stretch justify-center">
            {serviceCardData.map((item) => {
              const Icon =
                serviceCardIconMap[
                  item.icon as keyof typeof serviceCardIconMap
                ];

              return (
                <ServiceCard
                  key={item.heading}
                  cardData={{
                    heading: item.heading,
                    icon: Icon,
                    para: item.para,
                    id: item.id,
                  }}
                />
              );
            })}
          </div>
        </ServiceSection>

        <section id="whyUs">
          <WhyCard whyCardData={whyCardData} />
        </section>

        <HowItWorks id="howItWorks" />

        <CTA />
      </div>
    </div>
  );
}
