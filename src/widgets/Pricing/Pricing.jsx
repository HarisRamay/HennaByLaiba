import Container from "../../shared/ui/Container/Container";
import SectionHeading from "../../shared/ui/SectionHeading/SectionHeading";

const pricingGroups = [
  {
    title: "Bridal Henna",
    subtitle: "Bridal Mehndi Packages",
    items: [
      {
        no: 1,
        name: "Bridal Bunch / Tikki",
        description: "4 side + minimal feet design",
        price: "Rs. 2000",
      },
      {
        no: 2,
        name: "Wrist Length",
        description: "4 side + minimal feet",
        price: "Rs. 3000",
      },
      {
        no: 3,
        name: "Mid Length",
        description: "Back mid length + front wrist length + feet",
        price: "Rs. 5000",
      },
      {
        no: 4,
        name: "Mid Length",
        description: "4 side + feet",
        price: "Rs. 6000",
      },
      {
        no: 5,
        name: "Elbow Length",
        description: "Back elbow length + front wrist length + feet",
        price: "Rs. 8000",
      },
      {
        no: 6,
        name: "Elbow Length",
        description: "4 side + feet",
        price: "Rs. 10000",
      },
      {
        no: 7,
        name: "Above Elbow",
        description: "Customized according to design",
        price: "According to design",
        custom: true,
      },
    ],
  },
  {
    title: "Party / Events",
    subtitle: "Mehndi for Hands",
    items: [
      {
        no: 1,
        name: "Bunch / Tikki",
        description: "2 sides",
        price: "Rs. 700",
      },
      {
        no: 2,
        name: "Wrist Length",
        description: "2 sides",
        price: "Rs. 750",
      },
      {
        no: 3,
        name: "Mid Length",
        description: "2 sides",
        price: "Rs. 1200",
      },
      {
        no: 4,
        name: "Elbow Length",
        description: "2 sides",
        price: "Rs. 1600",
      },
      {
        no: 5,
        name: "Above Elbow",
        description: "According to design",
        price: "According to design",
        custom: true,
      },
    ],
  },
  {
    title: "Feet Mehndi",
    subtitle: "Beautiful details from hand to toe",
    items: [
      {
        no: 6,
        name: "Minimal",
        description: "Simple & elegant feet design",
        price: "Rs. 500",
      },
      {
        no: 7,
        name: "Bunch / Tikki",
        description: "Classic feet design",
        price: "Rs. 700",
      },
      {
        no: 8,
        name: "Heavy Designs",
        description: "Customized according to design",
        price: "According to design",
        custom: true,
      },
    ],
  },
];

function PricingCard({ group }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#6B2737]/15 bg-[#FFFDF8] shadow-[0_18px_50px_rgba(44,33,29,0.07)]">
      {/* Decorative top border */}
      <div className="h-1.5 bg-gradient-to-r from-[#6B2737] via-[#B8945B] to-[#6B2737]" />

      <div className="p-5 sm:p-7 md:p-8">
        {/* Heading */}
        <div className="mb-7 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8945B]/60" />

            <span className="text-xs text-[#B8945B]">✦</span>

            <span className="h-px w-10 bg-[#B8945B]/60" />
          </div>

          <h3 className="font-serif text-2xl font-medium text-[#6B2737] sm:text-3xl">
            {group.title}
          </h3>

          <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-[#7A675F]">
            {group.subtitle}
          </p>
        </div>

        {/* Items */}
        <div className="divide-y divide-[#6B2737]/10">
          {group.items.map((item) => (
            <div
              key={`${group.title}-${item.no}-${item.name}`}
              className="group flex items-center gap-3 py-4 first:pt-0 last:pb-0 sm:gap-4"
            >
              {/* Number */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B8945B]/50 bg-[#28361F] font-serif text-base text-[#F7E8CE] shadow-sm">
                {item.no}
              </div>

              {/* Description */}
              <div className="min-w-0 flex-1">
                <h4 className="font-serif text-[16px] font-semibold text-[#2C211D] sm:text-lg">
                  {item.name}
                </h4>

                <p className="mt-0.5 max-w-lg text-xs leading-5 text-[#6D5A52] sm:text-sm">
                  {item.description}
                </p>
              </div>

              {/* Price */}
              <div
                className={`shrink-0 rounded-full border px-3 py-2 text-right sm:min-w-[125px] sm:px-4 ${
                  item.custom
                    ? "border-[#B8945B]/60 bg-[#FAF3E7]"
                    : "border-[#28361F] bg-[#28361F]"
                }`}
              >
                <span
                  className={`block text-xs font-medium leading-4 sm:text-sm ${
                    item.custom ? "text-[#6B2737]" : "text-[#FFF8ED]"
                  }`}
                >
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#FAF6EF] py-20 sm:py-28"
    >
      {/* Soft decorative background elements */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#6B2737]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#B8945B]/10 blur-3xl" />

      <Container>
        <SectionHeading
          eyebrow="Price Menu"
          title="Henna Packages"
          description="Traditional art, timeless beauty. Choose the package that suits your occasion, or ask us about a customized design."
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-7">
          {pricingGroups.map((group) => (
            <PricingCard key={group.title} group={group} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 text-center">
          <span className="h-px flex-1 bg-[#B8945B]/40" />

          <p className="max-w-md text-xs italic leading-5 text-[#6D5A52] sm:text-sm">
            Final pricing for customized and heavy designs may vary according
            to the design.
          </p>

          <span className="h-px flex-1 bg-[#B8945B]/40" />
        </div>
      </Container>
    </section>
  );
}

export default Pricing;
