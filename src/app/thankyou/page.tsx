import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full  flex min-h-screen flex-col  items-center justify-center px-14 py-24">
      <div className="md:max-w-7xl w-full mx-auto flex flex-col md:px-14 px-6 gap-18 items-stretch">
        <div className="bg-accent w-full flex flex-col items-center justify-center rounded-2xl px-20 py-10 ">
          <h2 className="text-white font-bold text-5xl leading-17 text-center">
            Let’s Strengthen Your IT Together
          </h2>
          <p className=" text-lg leading-6 font-normal text-center text-[#F9F9F9]">
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
            className="w-full sm:w-auto leading-7 rounded-lg px-6 py-4"
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
