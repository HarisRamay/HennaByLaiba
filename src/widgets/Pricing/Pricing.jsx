import Container from "../../shared/ui/Container/Container";
import SectionHeading from "../../shared/ui/SectionHeading/SectionHeading";

const pricingGroups = [
  {
    title: "Bridal Henna",
    items: [
      ["Full Hands", "Rs. XXXX"],
      ["Full Feet", "Rs. XXXX"],
      ["Hands + Feet", "Rs. XXXX"],
    ],
  },
  {
    title: "Event Henna",
    items: [
      ["Per Hand", "Rs. XXXX"],
      ["Per Hour", "Rs. XXXX"],
      ["Guest Package", "Rs. XXXX"],
    ],
  },
  {
    title: "Custom",
    items: [
      ["Minimal Design", "Rs. XXXX"],
      ["Custom Design", "Rs. XXXX"],
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-[#FAF6EF] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Price Menu"
          title="Simple & transparent"
          description="Choose a service that fits your occasion. Final pricing may vary depending on design complexity."
        />

        <div className="mx-auto max-w-2xl divide-y divide-[#6B2737]/15 border-y border-[#6B2737]/15">
          {pricingGroups.map((group) => (
            <div key={group.title} className="py-8">
              <h3 className="mb-5 font-serif text-2xl text-[#6B2737]">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.items.map(([name, price]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-sm text-[#5C4A43]">{name}</span>

                    <span className="text-sm font-semibold text-[#2C211D]">
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Pricing;