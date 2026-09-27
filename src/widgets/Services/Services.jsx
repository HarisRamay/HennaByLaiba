import Container from "../../shared/ui/Container/Container";
import SectionHeading from "../../shared/ui/SectionHeading/SectionHeading";
import ServiceCard from "../../entities/service/ui/ServiceCard";
import { services } from "../../entities/service/model/services";

function Services() {
  return (
    <section id="services" className="bg-[#F1E7D8] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Designed for your moments"
          description="Handcrafted henna for weddings, celebrations and everything worth remembering."
        />

        <div
          className="
    flex
    gap-5
    overflow-x-auto
    snap-x
    snap-mandatory
    px-1
    pb-5
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
    md:grid
    md:grid-cols-3
    md:gap-6
    md:overflow-visible
    md:snap-none
  "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;