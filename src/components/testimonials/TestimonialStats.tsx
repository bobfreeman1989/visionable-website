import CountUp from "@/components/ui/CountUp";
import type { TestimonialStat } from "@/content/testimonials";

interface TestimonialStatsProps {
  stats: TestimonialStat[];
}

export function TestimonialStats({ stats }: TestimonialStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#F5F5F2] rounded-2xl p-8 mt-12">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <CountUp
            target={stat.target}
            suffix={stat.suffix}
            decimals={stat.decimals}
            className="text-2xl md:text-3xl font-extrabold text-primary"
          />
          <p className="text-gray-500 mt-1 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
