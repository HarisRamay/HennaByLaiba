import { Quote, Star } from "lucide-react";

function TestimonialCard({ testimonial }) {
  return (
    <article className="relative rounded-3xl border border-[#6B2737]/10 bg-[#F1E7D8] p-6 sm:p-7">
      <Quote
        size={34}
        strokeWidth={1.3}
        className="absolute right-6 top-6 text-[#6B2737]/15"
      />

      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={16}
            fill="currentColor"
            className="text-[#C6A15B]"
          />
        ))}
      </div>

      <p className="mt-6 text-sm leading-7 text-[#5C4A43]">
        "{testimonial.quote}"
      </p>

      <div className="mt-6">
        <p className="font-semibold text-[#2C211D]">
          {testimonial.name}
        </p>

        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#9A5B5B]">
          {testimonial.occasion}
        </p>
      </div>
    </article>
  );
}

export default TestimonialCard;