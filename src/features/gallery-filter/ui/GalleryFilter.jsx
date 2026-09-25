const categories = [
  { label: "All", value: "all" },
  { label: "Bridal", value: "bridal" },
  { label: "Minimal", value: "minimal" },
  { label: "Party", value: "party" },
];

function GalleryFilter({ activeCategory, onChange }) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2">
      {categories.map((category) => {
        const isActive = activeCategory === category.value;

        return (
          <button
            key={category.value}
            type="button"
            onClick={() => onChange(category.value)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-[#6B2737] text-white"
                : "bg-[#F1E7D8] text-[#5C4A43] hover:bg-[#E7D8C4]"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}

export default GalleryFilter;