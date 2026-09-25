import { ChevronDown } from "lucide-react";

function FAQAccordion({ questions, openIndex, onToggle }) {
  return (
    <div className="divide-y divide-[#6B2737]/10 border-y border-[#6B2737]/10">
      {questions.map((question, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={question.id}>
            <button
              type="button"
              onClick={() => onToggle(index)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-[#2C211D]">
                {question.question}
              </span>

              <ChevronDown
                size={20}
                className={`shrink-0 text-[#6B2737] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-10 text-sm leading-7 text-[#5C4A43]">
                  {question.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;