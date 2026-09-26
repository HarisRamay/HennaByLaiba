import { ArrowUpRight, MessageCircle } from "lucide-react";

import Container from "../../shared/ui/Container/Container";

function ContactCTA() {
  const whatsappNumber = "923281212467";

  const message = encodeURIComponent(
    "Hi Laiba! I saw your website and would like to enquire about a henna booking."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="contact" className="bg-[#2C211D] py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E7CFA4]">
            Let's Create Something Beautiful
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight text-white sm:text-6xl">
            Ready for your
            <br />
            <span className="italic text-[#E7CFA4]">perfect henna?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Whether you're planning your wedding, a special celebration or
            simply want beautiful henna, I'd love to create something
            special for you.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E7CFA4] px-7 py-3.5 text-sm font-semibold text-[#6B2737] transition hover:bg-white sm:w-auto"
            >
              <MessageCircle size={19} />
              Chat on WhatsApp
            </a>

            <a
              href="#gallery"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              View My Work
              <ArrowUpRight size={18} />
            </a>
          </div>

          <p className="mt-8 text-xs text-white/45">
            For bookings and enquiries, WhatsApp is the easiest way to reach me.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ContactCTA;