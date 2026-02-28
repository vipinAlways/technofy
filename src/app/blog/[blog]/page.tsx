import React from "react";
import Blog from "./Blog";
import { Blog as BlogType } from "@/index";
import { getBlog } from "@/lib/fetchingBlogs";

const Page = async ({ params }: { params: Promise<{ blog: string }> }) => {
  const { blog } = await params;

  // const formattedHeading = blog
  //   .replace(/([A-Z])/g, " $1")
  //   .replace(/_/g, " ")
  //   .replace(/\s+/g, " ")
  //   .trim()
  //   .replace(/^./, (c) => c.toUpperCase());

  const data = await getBlog(blog);

  console.log({ data });

  return (
    <div>
      <Blog
        blogData={{
          heading: data.title || "",
          image: data.seo.og_image,
          info: new Date(data.date_created).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          content: data.content,
        }}
      />
    </div>
  );
};

export default Page;
