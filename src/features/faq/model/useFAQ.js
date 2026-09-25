import { useState } from "react";

function useFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return {
    openIndex,
    toggleFAQ,
  };
}

export default useFAQ;