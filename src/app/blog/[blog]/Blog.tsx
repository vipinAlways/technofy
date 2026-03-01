import React from "react";
import { data as blogPost } from "@/htmlString.json";
import CTA from "@/components/common/CTA";

const popularBlogs = [
  {
    heading: "Boost Your Business with Smart IT Solutions",
    image: "/images/about-hero.png",
  },
  {
    heading: "Boost Your Business with Smart IT Solutions",
    image: "/images/about-hero.png",
  },
  {
    heading: "Boost Your Business with Smart IT Solutions",
    image: "/images/about-hero.png",
  },
];
const Blog = ({
  blogData,
}: {
  blogData: {
    heading: string;
    image: string;
    info: string;
    content: string;
  };
}) => {
  const { heading, image, info, content } = blogData;
  return (
    <div className="w-full relative flex flex-col gap-24 items-center py-24">
      <section className="max-w-7xl mx-auto w-full flex flex-col  md:gap-24 gap-12 items-stretch">
        <div className="flex w-full flex-col gap-10">
          <div className="flex flex-col gap-3 ">
            <h1 className="font-bold text-primary text-5xl leading-[4.25rem]  max-w-5xl">
              {heading}
            </h1>
            <p className="text-accent w-full flex items-center justify-between ">
              <span>{info}</span>
              <span>10 min read</span>
            </p>
          </div>
          <div className="w-full max-7-xl ">
            <img
              src={image}
              alt={heading}
              className="w-full aspect-video object-cover rounded-2xl mx-auto sm:mx-0"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl relative mx-auto w-full flex   md:gap-24 gap-12 items-start">
        <div
          dangerouslySetInnerHTML={{ __html: content || "" }}
          className="prose lg:prose-xl w-full"
        />

        <div className="flex flex-col gap-5 p-4 rounded-2xl max-w-sm bg-accent-foreground sticky top-24   ">
          <h1 className=" text-primary font-medium text-2xl leading-7">
            Popular Blog
          </h1>

          {popularBlogs.map((blog, index) => (
            <div
              className="flex border rounded-2xl border-border p-3 gap-3 bg-white"
              key={index}
            >
              <div className="aspect-3/2 rounded-lg w-36">
                <img
                  src={blog.image}
                  alt={blog.heading}
                  className="w-full h-full rounded-lg"
                />
              </div>

              <h3 className="text-primary leading-7 text-lg font-medium">
                {blog.heading}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <section className="max-w-7xl mx-auto w-full flex flex-col  md:gap-24 gap-12 items-stretch">
        <CTA />
      </section>
    </div>
  );
};

export default Blog;
