export type TestimonialReview = {
  name: string;
  location: string;
  project: string;
  text: string;
  image: string;
};

export type TestimonialStat = {
  target: number;
  suffix: string;
  label: string;
  decimals: number;
};

export const testimonialReviews: TestimonialReview[] = [
  {
    name: "Chang C.",
    location: "Sunnyvale, CA",
    project: "Artificial Grass & Pavers",
    text: "We are very satisfied with Visionable Landscaping, and I highly recommend them to my friends. Even though it is yard work, every detail is pretty good. From artificial grass to pavers, everything was done very well!",
    image: "/photos/testimonials/t01.webp",
  },
  {
    name: "Ken D.",
    location: "Bay Area, CA",
    project: "Fence & Gate Repair",
    text: "They were working on a job nearby. My project was small, repairing a side fence and gate. They did the work promptly and professionally. It was great working with them. Would use again.",
    image: "/photos/testimonials/t02.webp",
  },
  {
    name: "Jessica Z.",
    location: "San Jose, CA",
    project: "Front Yard Design & Turf",
    text: "They helped design my front yard, installed artificial grass, and added mulch. The entire job was completed in just one day, and the turnaround was incredibly quick. It has been a year now and the results are great.",
    image: "/photos/testimonials/t03.webp",
  },
  {
    name: "Backyard Client",
    location: "Fremont, CA",
    project: "Backyard Remodel",
    text: "Super happy with how my backyard turned out! Bob and his team were professional, efficient, and really paid attention to the details. They listened to what I wanted and gave great advice.",
    image: "/photos/portfolio/p01.webp",
  },
  {
    name: "Rock Yard Client",
    location: "Bay Area, CA",
    project: "Functional Yard Conversion",
    text: "Bob and team did a great job converting our full-of-rock yard to a beautiful and very functional space. He is experienced, prompt in replying, and very responsive.",
    image: "/photos/portfolio/p06.webp",
  },
];

export const testimonialStats: TestimonialStat[] = [
  { target: 5.0, suffix: "/5", label: "Average Rating", decimals: 1 },
  { target: 200, suffix: "+", label: "Happy Clients", decimals: 0 },
  { target: 160, suffix: "+", label: "Photos on Yelp", decimals: 0 },
  { target: 15, suffix: "+", label: "Years in Bay Area", decimals: 0 },
];
