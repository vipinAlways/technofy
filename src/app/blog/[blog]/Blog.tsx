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
    author?:string
  };
}) => {
  const { heading, image, info, content,author } = blogData;
  return (
    <div className="w-full relative flex flex-col gap-24 items-center py-24">
      <section className="md:max-w-7xl  lg:px-0 px-4 mx-auto w-full flex flex-col  md:gap-24 gap-12 items-stretch">
        <div className="flex w-full flex-col gap-10">
          <div className="flex flex-col gap-3 ">
            <h1 className="font-bold text-primary text-5xl leading-[4.25rem]  max-w-5xl">
              {heading}
            </h1>
            <p className="text-accent w-full flex items-center justify-between ">
              <span>{author} on {info}</span>
              <span>10 min read</span>
            </p>
          </div>
          <div className="w-full max-7-xl ">
            <img
              src={image}
              alt={heading}
              className="w-full aspect-video object-cover rounded-2xl mx-auto sm:mx-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="md:max-w-7xl  lg:px-0 px-4 relative mx-auto w-full flex lg:flex-row flex-col justify-between   gap-10  items-start">
        <div className="w-full flex-[3] relative">
          <div
            dangerouslySetInnerHTML={{ __html: content || "" }}
            className="prose lg:prose-xl max-w-full "
          />
        </div>

        <div className="flex flex-col gap-5 p-4 rounded-2xl w-full  lg:max-w-sm bg-accent-foreground lg:sticky md:top-24   ">
          <h1 className=" text-primary font-medium md:text-2xl md:leading-7 text-lg">
            Popular Blog
          </h1>

          {popularBlogs.map((blog, index) => (
            <div
              className="flex border md:rounded-2xl rounded-xl items-center border-border p-3 gap-3 bg-white"
              key={index}
            >
              <div className="aspect-3/2 rounded-lg lg:w-36 md:w-28">
                <img
                  src={blog.image}
                  alt={blog.heading}
                  className="w-full h-full rounded-lg"
                  loading="lazy"
                />
              </div>

              <h3 className="text-primary md:leading-7 md:text-lg text-base leading-5 font-medium">
                {blog.heading}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <section className="md:max-w-7xl  lg:px-0 px-4 mx-auto w-full flex flex-col  md:gap-24 gap-12 items-stretch">
        <CTA />
      </section>
    </div>
  );
};

export default Blog;
