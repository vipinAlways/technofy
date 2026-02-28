import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const blogData: {
  image: string;
  info: string;
  heading: string;
  para: string;
}[] = [
  {
    image: "/images/blog.png",
    info: "Posted by Karan on 24 Feb 2026",
    heading: "Boost Your Business with Smart IT Solutions",
    para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
  },
  {
    image: "/images/blog.png",
    info: "Posted by Karan on 24 Feb 2026",
    heading: "Boost Your Business with Smart IT Solutions",
    para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
  },
  {
    image: "/images/blog.png",
    info: "Posted by Karan on 24 Feb 2026",
    heading: "Boost Your Business with Smart IT Solutions",
    para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
  },
  {
    image: "/images/blog.png",
    info: "Posted by Karan on 24 Feb 2026",
    heading: "Boost Your Business with Smart IT Solutions",
    para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
  },
  {
    image: "/images/blog.png",
    info: "Posted by Karan on 24 Feb 2026",
    heading: "Boost Your Business with Smart IT Solutions",
    para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
  },
  {
    image: "/images/blog.png",
    info: "Posted by Karan on 24 Feb 2026",
    heading: "Boost Your Business with Smart IT Solutions",
    para: "In today’s digital world, reliable IT services are essential for business growth. From cloud solutions and cybersecurity to network management and technical support.",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col gap-24 py-24 ">
      <section
        id="hero"
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
              <h1 className="text-6xl leading-[4.25rem] font-bold ">
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
        <div className="flex relative items-end  w-full  bg-[url('/images/blog-hero.png')] bg-cover bg-center aspect-[32/15] p-[3.75rem] rounded-3xl ">
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
        className="max-w-7xl mx-auto md:px-14 px-6 flex flex-col gap-20"
      >
        <h1 className="font-semibold text-primary text-4xl leading-10">
          Read our Latest Blogs
        </h1>

        <div className="flex w-full items-start gap-8">
          {/* Blog Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogData.map((data, index) => (
              <BlogCard key={index} blogCardData={data} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="sticky top-20 bg-accent rounded-xl p-4 gap-5 flex flex-col h-fit">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl leading-7 font-medium text-white">
                Need IT Solutions?
              </h3>
              <p className="text-lg leading-7 font-normal text-muted-foreground">
                Let us help you grow your business with smart technology.
              </p>
            </div>

            <Button asChild className="px-6 py-4 text-lg leading-[100%]">
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
