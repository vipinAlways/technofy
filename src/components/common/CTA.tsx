import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Routes from "@/lib/route";

const CTA = () => {
  return (
    <section id="cta" className="w-full flex items-center justify-center ">
      <div className="relative  h-92 flex items-center  justify-center flex-col gap-10  w-full rounded-2xl   md:p-20 p-10">
        <div className="absolute inset-0 bg-black/75 z-10 rounded-2xl"></div>
        <div className="w-full h-full absolute top-0 left-0">
          <img
            src="/images/technology-background.png"
            alt=" Smart IT Solutions That Drive Business Growth"
            className="
          w-full h-full object-cover object-center -z-40 rounded-2xl"
            loading="eager"
          />
        </div>
        <div className="items-center flex flex-col gap-5 z-10">
          <h1 className="md:text-4xl md:leading-10 text-3xl  md:text-center font-bold text-white">
            Ready to Future-Proof Your Business?
          </h1>
          <p className="md:text-lg md:w-4/5 md:text-center  md:leading-7 text-base text-muted-foreground font-normal">
            Let's discuss how Technofy can help you achieve your technology{" "}
            goals. No pressure, no obligations — just a conversation.
          </p>
        </div>

        <Button className="py-5 text-base leading-[100%] font-semibold max-md:w-full px-8 rounded-[0.5rem] z-10 ">
          <Link href={Routes.contact}>Get a Free Consultation </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
