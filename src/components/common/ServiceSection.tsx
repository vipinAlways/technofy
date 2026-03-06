import { ServiceSectionData } from "@/index";
import { cn } from "@/lib/utils";

type ServiceSectionProps = {
  data: ServiceSectionData;
  children: React.ReactNode;
  id?: string;
  className?:string
};

export default function ServiceSection({
  data,
  children,
  id,
  className
}: ServiceSectionProps) {
  return (
    <section id={id} className="w-full  flex flex-col md:gap-20 gap-12 ">
      <div className={cn(className," flex flex-col gap-4 ")}>
        <h1 className="font-semibold md:text-4xl text-3xl  text-primary">
          {data.heading}
          {data.Service && <span className="text-accent"> {data.Service}</span>}
        </h1>
        <p className="text-muted text-base max-w-2xl w-full ">
          {data.para}
        </p>
      </div>

      {children}
    </section>
  );
}
