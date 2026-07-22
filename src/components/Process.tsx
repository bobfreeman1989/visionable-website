const steps = [
  {
    num: "01",
    title: "Share Your Vision",
    desc: "We visit your home, see the space, and learn what matters, weekend cookouts? A quiet morning coffee spot? Somewhere the kids won\u2019t want to leave?",
    timeline: "1-2 hours",
  },
  {
    num: "02",
    title: "See It Before It\u2019s Real",
    desc: "3D renderings of your future yard. Move things around, try layouts, change materials. Your vision becomes something you can walk through.",
    timeline: "1-2 weeks",
  },
  {
    num: "03",
    title: "Watch It Come to Life",
    desc: "Our crew builds it, on time, on budget, with daily photo updates. Your vision, taking shape.",
    timeline: "2-6 weeks",
  },
  {
    num: "04",
    title: "Live In It",
    desc: "Final walkthrough, care guide, and warranty. Then invite everyone over, the best test of any outdoor space is the first gathering.",
    timeline: "Day 1",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-14 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-stone-900 mb-4">
            From Vision to &ldquo;Come Over for Dinner&rdquo;
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Four steps from the yard you have to the outdoor space you&apos;ve been picturing.
          </p>
        </div>

        {/* Horizontal 4-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
              <div key={s.num} className="relative bg-background rounded-2xl p-6 border border-stone-200 hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300 h-full group">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 border-t-2 border-dashed border-primary/30" />
                )}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold mb-3 group-hover:bg-primary-dark transition-colors duration-300">
                  {s.num}
                </div>
                <h3 className="text-lg text-stone-900 mb-2">{s.title}</h3>
                <p className="text-sm text-stone-500 mb-4 leading-relaxed">{s.desc}</p>
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {s.timeline}
                </span>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
