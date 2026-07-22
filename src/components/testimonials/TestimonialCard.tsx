import Image from "next/image";
import { Quote } from "lucide-react";
import type { TestimonialReview } from "@/content/testimonials";

interface TestimonialCardProps {
  review: TestimonialReview;
  priority?: boolean;
}

export function TestimonialCard({ review, priority = false }: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-stone-100 h-full">
      <div className="relative aspect-[16/9]">
        <Image
          src={review.image}
          alt={`${review.project} in ${review.location} for ${review.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
        <div className="absolute top-4 left-4 bg-white rounded-full shadow-sm px-3 py-1 text-xs font-medium text-stone-700">
          {review.project}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-accent text-sm">★</span>
            ))}
          </div>
          <span className="text-xs text-stone-500">Verified Review</span>
        </div>
        <Quote className="w-6 h-6 text-primary/20 mb-2" />
        <p className="text-stone-600 text-sm leading-relaxed mb-4">{review.text}</p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm">
            {review.name[0]}
          </div>
          <div>
            <p className="font-semibold text-stone-900 text-sm">{review.name}</p>
            <p className="text-xs text-stone-500">{review.location}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
