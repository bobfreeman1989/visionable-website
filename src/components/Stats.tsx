"use client";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { target: 200, suffix: "+", label: "Projects Completed" },
  { target: 15, suffix: "+", label: "Years Serving Bay Area Families" },
  { target: 5.0, suffix: "", label: "Google & Yelp Rating", decimals: 1 },
  { target: 100, suffix: "%", label: "On-Time Completion" },
];

export default function Stats() {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <CountUp target={s.target} suffix={s.suffix} decimals={s.decimals} />
              <p className="text-gray-500 mt-1 text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
