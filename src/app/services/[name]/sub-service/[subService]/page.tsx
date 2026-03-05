import React from "react";
import SubService from "../SubService";
import { data as subServiceData } from "@/subServiceData.json";
import { getSubService } from "@/lib/fetchServices";
const Page = async ({
  params,
}: {
  params: Promise<{ subService: string }>;
}) => {
  const { subService } = await params;
  const data = await getSubService(subService);
  return (
    <div>
      <SubService serivceName={subService} data={data} />
    </div>
  );
};

export default Page;
