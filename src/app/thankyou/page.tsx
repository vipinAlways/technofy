import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div
      className="w-full mmd:max-w-7xl mx-auto
      flex min-h-screen flex-col  items-center md:pt-32 pt-28 lg:px-0 md:max-w-7xl px-4 justify-center pb-24"
    >
      <div className="bg-accent w-full flex flex-col items-center justify-center rounded-2xl lg:px-20 lg:py-10 p-6 gap-4">
        <h2 className="text-white font-bold md:text-5xl text-2xl leading-tight md:text-center">
          Let's Strengthen Your IT Together
        </h2>
        <p className="text-base md:w-[70%] leading-6 font-normal md:text-center text-muted-foreground">
          Have questions about cybersecurity, infrastructure, or IT support?
          Share your details below and our team will respond promptly with
          expert guidance and clear next steps.
        </p>
      </div>

      <div className="w-full md:max-w-7xl  lg:px-0  mx-auto flex flex-col items-center justify-center px-6 md:px-14 gap-10">
        <div className="w-full max-w-md flex flex-col items-center gap-6">
          <div className="w-full relative  aspect-13/9">
            <img
              src="/images/thankyou.png"
              className="w-full h-auto"
              alt="technofy.com thankyou page"
              loading="lazy"
            />
          </div>

          <Button
            asChild
            className="px-8 py-6  font-semibold text-lg leading-[100%] rounded-[0.5rem]"
          >
            <Link href="/" className="flex items-center gap-2">
              Back to Home Page
              <MoveRight className="size-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
