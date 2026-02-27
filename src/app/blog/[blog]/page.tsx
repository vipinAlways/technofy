import React from "react";
import Blog from "./Blog";

type PageProps = {
  params: {
    blog: string;
  };
};

const Page = async ({ params }: { params: Promise<{ blog: string }> }) => {
  const { blog } = await params;

  const formattedHeading = blog
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());

  return (
    <div>
      <Blog
        blogData={{
          heading: formattedHeading,
          image: "/images/about-hero.png",
          info: "Posted by Karan on 24 Feb 2026",
        }}
      />
    </div>
  );
};

export default Page;
