export type TestimonialReview = {
  name: string;
  /** City, when known for certain. */
  location?: string;
  project: string;
  text: string;
  /** Only set when the photo is of this reviewer's own project. */
  image?: string;
  /** Where the review was left, shown on the card. */
  source: string;
};

/** Google reviews are quoted verbatim from the Visionable Landscaping Google
 *  Business Profile (5.0, 26 reviews as of 2026-10-02); "…" marks a trimmed
 *  passage. Names are shortened to first name + initial. */
export const testimonialReviews: TestimonialReview[] = [
  {
    name: "Ning L.",
    project: "Pavers, Turf, Pergola & Lighting",
    text: "We hired Bob and his team for a full backyard renovation, including pavers, synthetic grass, a pergola, and outdoor lighting. The quality of the work is excellent, and the pricing was transparent from the start. Communication was straightforward throughout the process. Very happy with how the backyard turned out!",
    source: "Google review",
  },
  {
    name: "Yu Z.",
    project: "Backyard Remodel",
    text: "Really happy with how our backyard turned out. The quality of work is excellent — everything looks clean, precise, and just how we wanted it. The project moved efficiently from start to finish. The crew showed up on time every day, made steady progress, and finished on schedule. … They anticipated things I hadn't thought of and made smart decisions without needing me to guide every step.",
    source: "Google review",
  },
  {
    name: "Wen S.",
    project: "Basketball Court, Turf & Playground",
    text: "They turned our space into an absolute dream—designing and building a full basketball court, lush grass areas, a fun playground, and gorgeous planting throughout. The quality of their design and craftsmanship is top-notch, and you can tell they care about every detail. … Every follow-up request we had, they handled with a smile and zero fuss.",
    source: "Google review",
  },
  {
    name: "JQ T.",
    project: "Drainage, Frontage & Paving",
    text: "Bob assisted me with several major projects, including a drainage system installation, frontage public right-of-way improvements, and paving the entire lot. Our city is notoriously difficult to deal with, but Bob’s expertise really shone through. He took the time to understand every complex requirement and managed the entire process until we successfully passed the final inspection.",
    source: "Google review",
  },
  {
    name: "Ab J.",
    project: "Front & Backyard",
    text: "Bob and his team were amazing to work with! They showed up on time every day, worked efficiently, and kept everything clean after they finished. Our front and backyard look completely new now. Bob is really knowledgeable and easy to talk to — he gave great design ideas that fit our budget.",
    source: "Google review",
  },
  {
    name: "Siyuan L.",
    project: "Paving",
    text: "Bob and his team was very professional, easy to communicate with, and paid a lot of attention to the details. The job was nicely done including upon spotting some defects caused by weather, volunteering re-paving a fairly large area at no extra cost.",
    source: "Google review",
  },
  {
    name: "Yvonne Z.",
    project: "Sloped Yard Drainage",
    text: "They efficiently and professionally helped me resolve a serious rainwater backflow issue in my sloped backyard. Their work has stood the test of two rainy seasons — especially the one two years ago, which brought unusually heavy and intense rainfall.",
    source: "Google review",
  },
  {
    name: "Yang G.",
    project: "Pergola, Planting & Irrigation",
    text: "Right from the initial consultation, Bob provided a detailed and reasonable quote with no hidden fees, which was a huge relief and built immediate trust. … Bob offered lots of good suggestions for existing landscaping design, material choice, and irrigation setup. … the beautiful construction of the pergola has become the centerpiece of my outdoor living space.",
    source: "Google review",
  },
  {
    name: "Ben W.",
    project: "Pavers, Turf & Retaining Wall",
    text: "Overall I was happy with my backyard project, which includes paver and turf, a small retainer wall and some plants inside, and some concrete work on the side yard. Their quote was detailed and the final result matches our expectations. … They even remeasured the project at last and provided a small refund based on the actual measured square footage.",
    source: "Google review",
  },
  {
    name: "John T.",
    project: "Planting, Irrigation, Turf & Pergola",
    text: "Visionable Landscaping did an amazing job transforming our new yard. They were always on time, paid great attention to detail, and delivered high-quality work — from planting and irrigation to artificial lawn and pergola installation. Super responsive to questions and easy to work with. Highly recommended!",
    source: "Google review",
  },
  {
    name: "Rui Y.",
    project: "Functional Yard Conversion",
    text: "Bob and team did a great job converting our full-of-rock yard to a beautiful and very functional space. He is very experienced, prompt on replying and very responsive. He worked with us from designing to constructing and always made sure they delivered what we want.",
    source: "Google review",
  },
  {
    name: "Jason W.",
    project: "Yard Remodel",
    text: "From start to finish, their team was incredibly professional, efficient, and detail-oriented. They work fast without sacrificing quality, and their communication is top-notch—I always knew what was happening at every stage of the project.",
    source: "Google review",
  },
  {
    name: "Chang C.",
    source: "Verified review",
    project: "Artificial Grass & Pavers",
    text: "We are very satisfied with Visionable Landscaping, and I highly recommend them to my friends. Even though it is yard work, every detail is pretty good. From artificial grass to pavers, everything was done very well!",
    image: "/photos/testimonials/t01.webp",
  },
  {
    name: "Ken D.",
    source: "Verified review",
    project: "Fence & Gate Repair",
    text: "They were working on a job nearby. My project was small, repairing a side fence and gate. They did the work promptly and professionally. It was great working with them. Would use again.",
    image: "/photos/testimonials/t02.webp",
  },
  {
    name: "Jessica Z.",
    source: "Verified review",
    project: "Front Yard Design & Turf",
    text: "They helped design my front yard, installed artificial grass, and added mulch. The entire job was completed in just one day, and the turnaround was incredibly quick. It has been a year now and the results are great.",
    image: "/photos/testimonials/t03.webp",
  },
];
