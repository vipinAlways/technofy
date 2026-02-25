import HeroSection from "@/components/common/HeroSection";
import { ServiceHeroSection } from "@/index";
import React from "react";

const heroSeciton: ServiceHeroSection = {
  button: "Schedule a Free Security Assessment",
  heading: "Advanced Endpoint Security That Protects Every Device",
  image: "/images/hero-background.png",
  para: "We secure laptops, desktops, and mobile devices with proactive threat detection, real-time monitoring, and rapid incident response — ensuring your business stays protected against modern cyber threats.",
};
const SubService = () => {
  return <div>

    <HeroSection className="" data={heroSeciton}/>
  </div>;
};

export default SubService;
