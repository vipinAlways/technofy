import React from "react";
import SubService from "../SubService";

const Page = async ({
  params,
}: {
  params: Promise<{ subService: string }>;
}) => {
  const { subService } = await params;
  return (
    <div>
      <SubService />
    </div>
  );
};

export default Page;
