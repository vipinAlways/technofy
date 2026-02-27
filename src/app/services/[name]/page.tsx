import servicesData from "@/servicepage.json";

import Service from "./Service";



// console.log("params:", params);
export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
console.log(name);
  return (
    <div className="w-full flex  justify-center">
      <Service href={name} data={servicesData.data} />
    </div>
  );
}
