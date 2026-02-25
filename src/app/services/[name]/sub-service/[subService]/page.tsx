import React from "react";
import SubService from "../SubService";
import { data as subServiceData } from "@/subServiceData.json";
const Page = async ({
  params,
}: {
  params: Promise<{ subService: string }>;
}) => {
  const { subService } = await params;
  return (
    <div>
      <SubService serivceName={subService} data={subServiceData} />
    </div>
  );
};

export default Page;
