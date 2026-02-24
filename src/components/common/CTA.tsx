import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section id="cta" className="mb-22 relative">
      <div className="relative z-10  h-92 flex items-center justify-center flex-col gap-10  w-full rounded-2xl bg-[url('/images/technology-background.png')] bg-cover bg-center flex items-center justify-center p-20">
       <div className="absolute inset-0 bg-black/80 -z-10 rounded-2xl"></div>
        <div className="items-center flex flex-col gap-5">
          <h1 className="text-4xl leading-10  font-bold text-white">
            Ready to Future-Proof Your Business?
          </h1>
          <p className="text-lg  leading-7 text-muted-foreground font-normal">
            Let's discuss how Technofy can help you achieve your technology{" "}
            <br />
            goals. No pressure, no obligations — just a conversation.
          </p>
        </div>

        <Button className="px-6 py-4 font-semibold text-base leading-[100%]">
          <Link href={"#"}>Get a Free Consultation </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
