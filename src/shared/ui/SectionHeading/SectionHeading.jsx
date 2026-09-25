function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#9A5B5B]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-4xl text-[#6B2737] sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#5C4A43] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;