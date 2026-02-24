import { data as serviceData } from "@/services.json";

type PageProps = {
  params: {
    name: string;
  };
};

// console.log("params:", params);
export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const data = serviceData[Number(name) - 1];
  return <div></div>;
}
