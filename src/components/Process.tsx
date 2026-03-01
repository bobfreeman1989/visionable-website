"use client";
import FadeUp from "@/components/motion/FadeUp";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We visit your property, listen to your vision, and give you a clear, honest estimate.",
    timeline: "1-2 hours",
  },
  {
    num: "02",
    title: "Design & Plan",
    desc: "Detailed plans with 3D renderings — see exactly what your yard will look like.",
    timeline: "1-2 weeks",
  },
  {
    num: "03",
    title: "Build It Right",
    desc: "Our crew brings the design to life — on time, on budget, with daily updates.",
    timeline: "2-6 weeks",
  },
  {
    num: "04",
    title: "Walk & Wow",
    desc: "Final walkthrough, care guide, warranty info, and our commitment to stand behind it.",
    timeline: "1 day",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Vision to Reality in 4 Steps
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            No guesswork. No drama. Just a clear, proven process that turns your
            ideas into a landscape you&apos;ll love coming home to.
          </p>
        </FadeUp>

        {/* Horizontal 4-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <FadeUp key={s.num} delay={i * 0.1}>
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 border-t-2 border-dashed border-primary/30" />
                )}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold mb-3">
                  {s.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{s.desc}</p>
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {s.timeline}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
