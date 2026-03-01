import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full  flex min-h-screen flex-col  items-center pt-32 justify-center pb-24">
      <div className="md:max-w-7xl w-full mx-auto flex flex-col  gap-18 items-stretch">
         <div className="bg-accent w-full flex flex-col items-center justify-center rounded-2xl px-20 py-10 gap-4">
          <h2 className="text-white font-bold text-5xl leading-tight text-center">
            Let's Strengthen Your IT Together
          </h2>
          <p className="text-base w-[70%] leading-6 font-normal text-center text-muted-foreground">
            Have questions about cybersecurity, infrastructure, or IT support?
            Share your details below and our team will respond promptly with
            expert guidance and clear next steps.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-6 md:px-14 gap-10">
        <div className="w-full max-w-md flex flex-col items-center gap-6">
          <div className="w-full relative  aspect-13/9">
            <img
              src="/images/thankyou.png"
              className="w-full h-auto"
              alt="technofy thankyou page"
            />
          </div>

          <Button
            asChild
            className="py-5 text-base leading-[100%] font-semibold px-5 rounded-[0.5rem]"
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
