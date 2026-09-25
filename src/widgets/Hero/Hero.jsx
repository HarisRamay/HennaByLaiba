import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#2C211D]"
    >
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=85"
        alt="Henna design"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 w-full px-5 pb-20 pt-32 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#F1E7D8]">
              Handcrafted Henna Art
            </p>

            <h1 className="font-serif text-5xl leading-[0.95] text-white sm:text-7xl">
              Henna by
              <br />
              <span className="italic text-[#E7CFA4]">Laiba</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-white/85 sm:text-lg">
              Art that tells your story — handcrafted henna designs for
              weddings, celebrations and beautiful moments.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#gallery"
                className="rounded-full bg-[#F1E7D8] px-7 py-3.5 text-center text-sm font-semibold text-[#6B2737] transition hover:bg-white"
              >
                View My Work
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/50 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          <a
            href="#about"
            className="mt-14 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70"
          >
            Scroll to explore
            <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;