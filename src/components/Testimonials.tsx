"use client";
import FadeUp from "@/components/motion/FadeUp";
import CountUp from "@/components/ui/CountUp";

const featured = [
  {
    name: "Chang C.",
    title: "Homeowner",
    location: "Sunnyvale, CA",
    project: "Artificial Grass & Pavers",
    text: "We are very satisfied with Visionable Landscaping, and I highly recommend them to my friends. Even though it is yard work, every detail is pretty good. From artificial grass to pavers, everything was done very well!",
  },
  {
    name: "Ken D.",
    title: "Homeowner",
    location: "Bay Area, CA",
    project: "Fence & Gate Repair",
    text: "They were working on a job nearby. My project was small, repairing a side fence and gate. They did the work promptly and professionally. It was great working with them. Would use again.",
  },
  {
    name: "Jessica Z.",
    title: "Homeowner",
    location: "San Jose, CA",
    project: "Front Yard Design & Turf",
    text: "They helped design my front yard, installed artificial grass, and added mulch. The entire job was completed in just one day, and the turnaround was incredibly quick. It has been a year now and the results are great. I don\u2019t need to maintain it. Recommend them for anyone in need of landscaping services.",
  },
];

const secondary: typeof featured = [];

const reviewStats = [
  { target: 5.0, suffix: "/5", label: "Average Rating", decimals: 1 },
  { target: 200, suffix: "+", label: "Happy Clients", decimals: 0 },
  { target: 160, suffix: "+", label: "Photos on Yelp", decimals: 0 },
  { target: 15, suffix: "+", label: "Years in the Bay Area", decimals: 0 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what real Bay Area
            homeowners are saying about working with us.
          </p>
        </FadeUp>

        {/* Featured reviews */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((r, i) => (
            <FadeUp key={r.name} delay={i * 0.1}>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Verified Review
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-sm">★</span>
                    ))}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mb-4">
                  {r.name[0]}
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.title}</p>
                    <p className="text-xs text-gray-500">{r.location}</p>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                    {r.project}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Secondary reviews */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {secondary.map((r, i) => (
            <FadeUp key={r.name} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-xs">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{r.project}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.title}</p>
                  <p className="text-xs text-gray-500">{r.location}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Review stats with CountUp */}
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 rounded-2xl p-8">
            {reviewStats.map((s) => (
              <div key={s.label} className="text-center">
                <CountUp target={s.target} suffix={s.suffix} decimals={s.decimals} className="text-2xl md:text-3xl font-extrabold text-primary" />
                <p className="text-gray-500 mt-1 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
