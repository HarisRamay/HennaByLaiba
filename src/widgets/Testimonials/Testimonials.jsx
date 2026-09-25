import Container from "../../shared/ui/Container/Container";
import SectionHeading from "../../shared/ui/SectionHeading/SectionHeading";

import TestimonialCard from "../../entities/testimonial/ui/TestimonialCard";
import { testimonials } from "../../entities/testimonial/model/testimonials";

function Testimonials() {
  return (
    <section className="bg-[#FAF6EF] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by my clients"
          description="A few words from people who have trusted me with their special moments."
        />

        <div className="grid gap-5 md:grid-cols-3">
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