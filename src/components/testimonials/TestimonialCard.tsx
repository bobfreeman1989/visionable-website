import Image from "next/image";
import { Quote } from "lucide-react";
import type { TestimonialReview } from "@/content/testimonials";

interface TestimonialCardProps {
  review: TestimonialReview;
  priority?: boolean;
}

export function TestimonialCard({ review, priority = false }: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-stone-200">
      {review.image ? (
        <div className="relative aspect-[16/9]">
          <Image
            src={review.image}
            alt={`${review.project} for ${review.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
          <div className="absolute top-4 left-4 bg-white rounded-full shadow-sm px-3 py-1 text-xs font-medium text-stone-700">
            {review.project}
          </div>
        </div>
      ) : (
        <div className="px-6 pt-6">
          <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
            {review.project}
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-accent-dark text-sm">★</span>
            ))}
          </div>
          <span className="text-xs text-stone-500">{review.source}</span>
        </div>
        <Quote className="w-6 h-6 text-primary/20 mb-2" />
        <p className="text-stone-600 text-sm leading-relaxed mb-4">{review.text}</p>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm">
            {review.name[0]}
          </div>
          <div>
            <p className="font-semibold text-stone-900 text-sm">{review.name}</p>
            {review.location && <p className="text-xs text-stone-500">{review.location}</p>}
          </div>
        </div>
      </div>
    </article>
  );
}
