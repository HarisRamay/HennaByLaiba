import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import Container from "../../shared/ui/Container/Container";
import SectionHeading from "../../shared/ui/SectionHeading/SectionHeading";

import TestimonialCard from "../../entities/testimonial/ui/TestimonialCard";
import { testimonials } from "../../entities/testimonial/model/testimonials";

function Testimonials() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cards = carousel.children;

    if (!cards.length) return;

    const cardWidth = cards[0].offsetWidth;
    const gap = 16;

    const index = Math.round(
      carousel.scrollLeft / (cardWidth + gap)
    );

    setActiveIndex(
      Math.min(Math.max(index, 0), testimonials.length - 1)
    );
  };

  const scrollToCard = (index) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const card = carousel.children[index];

    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-[#FAF6EF] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by my clients"
          description="A few words from people who have trusted me with their special moments."
        />

        {/* Mobile */}
        <div className="relative mt-8 md:hidden">
          {/* Swipe indicator */}
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#6B2737]">
            <span>Swipe for more</span>

            <ArrowRight
              size={17}
              strokeWidth={2}
              className="animate-[swipeArrow_1.2s_ease-in-out_infinite]"
            />
          </div>

          <div className="relative">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-5 bg-gradient-to-r from-[#FAF6EF] to-transparent" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#FAF6EF] to-transparent" />

            {/* Carousel */}
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-2 pb-5"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-[82vw] max-w-[420px] shrink-0 snap-center"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination bubbles */}
          <div className="mt-1 flex items-center justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => scrollToCard(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-7 bg-[#6B2737]"
                    : "w-2.5 bg-[#B8945B]/40 hover:bg-[#B8945B]/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="mx-auto mt-12 hidden max-w-5xl md:grid md:grid-cols-3 md:gap-5">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;