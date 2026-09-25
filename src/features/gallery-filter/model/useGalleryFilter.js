import { useMemo, useState } from "react";

function useGalleryFilter(items) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    filteredItems,
  };
}

export default useGalleryFilter;