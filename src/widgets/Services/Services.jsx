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

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;