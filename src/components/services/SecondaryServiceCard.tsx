import Link from "next/link";
import type { ServiceItem } from "@/content/services";

interface SecondaryServiceCardProps {
  service: ServiceItem;
}

export function SecondaryServiceCard({ service }: SecondaryServiceCardProps) {
  const content = (
    <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 hover:border-primary/20 hover:shadow-md transition-all duration-300 group h-full">
      <div className="flex items-center gap-3 mb-2">
        <service.Icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" strokeWidth={1.5} />
        <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
    </div>
  );

  if (service.link) {
    return <Link href={service.link} className="block h-full">{content}</Link>;
  }

  return content;
}
