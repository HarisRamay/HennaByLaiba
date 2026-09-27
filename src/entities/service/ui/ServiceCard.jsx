function ServiceCard({ service }) {
  return (
    <article
      className="
        group overflow-hidden rounded-3xl
        border border-[#D8C8B5]
        bg-[#F1E7D8]
        shadow-[0_4px_15px_rgba(107,39,55,0.08)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_10px_25px_rgba(107,39,55,0.14)]
      "
    >
      <div className="aspect-4/5 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="font-serif text-2xl text-[#6B2737]">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#5C4A43]">
          {service.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-[#6B2737]">
            {service.price}
          </span>

          <a
            href="#contact"
            className="text-sm font-semibold text-[#6B2737] underline underline-offset-4"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;