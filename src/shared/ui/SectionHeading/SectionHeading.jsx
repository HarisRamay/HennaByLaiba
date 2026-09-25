function SectionHeading({
  eyebrow,
  title,
  description,
  theme = "light",
}) {
  const isDark = theme === "dark";

  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.25em] ${
            isDark ? "text-[#E7CFA4]" : "text-[#9A5B5B]"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-serif text-4xl sm:text-5xl ${
          isDark ? "text-white" : "text-[#6B2737]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base ${
            isDark ? "text-white/70" : "text-[#5C4A43]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;