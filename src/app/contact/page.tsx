import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div className="w-full max-w-7xl flex flex-col gap-24 items-center justify-center">
      <div className="bg-accent w-full">
        <h1>Let’s Strengthen Your IT Together</h1>
        <p>
          Have questions about cybersecurity, infrastructure, or IT support?
          Share your details below and our team will respond promptly with
          expert guidance and clear next steps.
        </p>
      </div>

      <div className={`flex items-stretch flex-1 gap-8 h-fit`}>
        <div className="w-1/2 relative aspect-9/10 max-md:hidden">
          <img
            src={"/images/contact.png"}
            alt="why-us"
            className="rounded-2xl object-cover h-full w-full"
            loading="lazy"
          />
        </div>

        <div className="md:w-1/2 w-full text-muted-foreground gap-8 flex flex-col items-start">
          <div>
            <h1 className="font-semibold md:text-4xl text-primary text-xl leading-10">
              Let’s Talk About Your IT Goals
            </h1>
          </div>

          <div>
            <form action="">
              <Button className="w-full ">Schedule a Free Consultation</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
