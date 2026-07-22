import Link from "next/link";
import type { ServiceItem } from "@/content/services";

interface FeaturedServiceCardProps {
  service: ServiceItem;
}

export function FeaturedServiceCard({ service }: FeaturedServiceCardProps) {
  const content = (
    <div className="bg-white border border-stone-200 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-[transform,box-shadow,border-color] duration-300 h-full relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <service.Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-xl text-stone-900">{service.title}</h3>
            {service.tag && (
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/8 px-2.5 py-0.5 rounded-full">
                {service.tag}
              </span>
            )}
          </div>
          <p className="text-stone-500 leading-relaxed">{service.desc}</p>
        </div>
      </div>
    </div>
  );

  if (service.link) {
    return <Link href={service.link} className="block h-full">{content}</Link>;
  }

  return content;
}
