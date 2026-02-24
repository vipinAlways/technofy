import { ServiceSectionData } from "@/index";

type ServiceSectionProps = {
  data: ServiceSectionData;
  children: React.ReactNode;
  id?: string;
};

export default function ServiceSection({
  data,
  children,
  id,
}: ServiceSectionProps) {
  return (
    <section id={id} className="w-full flex flex-col gap-20 py-10">
      <div className="text-center flex flex-col gap-4">
        <h1 className="font-semibold text-4xl text-primary">
          {data.heading}
          {data.Service && <span className="text-accent"> {data.Service}</span>}
        </h1>
        <p className="text-muted">{data.para}</p>
      </div>

      {children}
    </section>
  );
}
