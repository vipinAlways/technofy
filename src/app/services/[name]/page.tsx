import servicesData from "@/servicepage.json";

import Service from "./Service";
import { getService } from "@/lib/fetchServices";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;   
  const data = await getService(name);



  return (
    <div className="w-full flex  justify-center">
      <Service href={name} data={data} />
    </div>
  );
}
