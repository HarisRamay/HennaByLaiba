import Container from "../../shared/ui/Container/Container";
import SectionHeading from "../../shared/ui/SectionHeading/SectionHeading";

import FAQAccordion from "../../features/faq/ui/FAQAccordion";
import useFAQ from "../../features/faq/model/useFAQ";

const questions = [
  {
    id: 1,
    question: "How far in advance should I book?",
    answer:
      "For bridal bookings, I recommend reaching out as early as possible so we can discuss your date, design preferences and availability. For smaller events, availability may vary depending on the date.",
  },
  {
    id: 2,
    question: "What type of henna do you use?",
    answer:
      "I use quality henna intended for traditional henna application. Specific products and ingredients can be discussed before your appointment if you have any sensitivities or preferences.",
  },
  {
    id: 3,
    question: "Can I request a custom design?",
    answer:
      "Absolutely. You can share your inspiration, preferred style or outfit details, and we can create a design that suits your occasion.",
  },
  {
    id: 4,
    question: "Do you provide bridal packages?",
    answer:
      "Yes. Bridal services can be customized based on the coverage, design complexity and requirements of your event. Contact me for details and pricing.",
  },
  {
    id: 5,
    question: "How can I contact you for a booking?",
    answer:
      "The easiest way is through WhatsApp. Use the WhatsApp button on the website to send an enquiry and discuss your date and requirements.",
  },
];

function FAQ() {
  const { openIndex, toggleFAQ } = useFAQ();

  return (
    <section id="faq" className="bg-[#F1E7D8] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you may want to know before getting your henna done."
        />

        <div className="mx-auto max-w-3xl">
          <FAQAccordion
            questions={questions}
            openIndex={openIndex}
            onToggle={toggleFAQ}
          />
        </div>
      </Container>
    </section>
  );
}

export default FAQ;