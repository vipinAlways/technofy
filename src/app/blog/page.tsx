import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-24 py-24 ">
      <section
        id="#hero"
        className={"max-w-7xl mx-auto md:px-14 px-6 space-y-4"}
      >
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* Content */}
        <div className="flex items-center justify-center w-full">
          <div
            className={
              "relative z-10 flex  justify-center items-center w-[70%] flex-col gap-8"
            }
          >
            <div className="text-center gap-3">
              <h1 className="text-6xl leading-17 font-bold ">
                <span className="text-accent">Insights</span> &{" "}
                <span className="text-accent">Resources</span> for Smarter IT
                Decisions
              </h1>
              <p className="text-lg  leading-7 text-muted">
                Stay updated with expert articles, cybersecurity tips, and IT
                strategies designed to help business stay secure, efficient, and
                future-ready
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative items-end  w-full  bg-[url('/images/blog-hero.png')] bg-cover bg-center aspect-32/15 p-15 rounded-3xl ">
          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

          <div className="flex flex-col gap-3 h-fit max-w-3xl w-full text-white">
            <h1>sdjekfug ewfgey fed dhvc</h1>
            <p>
              eqwfgyehfkjwerhfbrbgjnr enqvehfyugqeugjfjefhk feufhuiq
              fyefgqeufgeu eqwfgyehfkjwerhfbrbgjnr enqvehfyugqeugjfjefhk
              feufhuiq fyefgqeufgeu eqwfgyehfkjwerhfbrbgjnr
              enqvehfyugqeugjfjefhk feufhuiq fyefgqeufgeu
            </p>
          </div>
        </div>
      </section>

      <section
        id="blogs"
        className={"max-w-7xl mx-auto md:px-14 px-6 space-y-4"}
      >
        <h1>Read our Latest Blogs</h1>

        <div className="flex w-full ">
          <div className="w-4/5"></div>
          <div className="sticky top-2 bg-accent ">
            <div>
              <h3 className="text-2xl leading-7 font-medium">
                Need IT Solutions?
              </h3>
              <p className="text-lg leading-7 font-normal">
                {" "}
                Let us help you grow your business with smart technology.
              </p>
            </div>

            <Button asChild className="px-6 py-4 text-lg leading-[100%] ">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
