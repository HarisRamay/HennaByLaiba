function Footer() {
  return (
    <footer className="bg-[#2C211D] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-serif text-3xl text-[#E7CFA4]"
            >
              Henna by Laiba
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
              Handcrafted henna designs created with care for weddings,
              celebrations and beautiful moments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E7CFA4]">
              Explore
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <a href="#home" className="w-fit text-sm text-white/65 hover:text-white">
                Home
              </a>

              <a href="#about" className="w-fit text-sm text-white/65 hover:text-white">
                About
              </a>

              <a href="#services" className="w-fit text-sm text-white/65 hover:text-white">
                Services
              </a>

              <a href="#pricing" className="w-fit text-sm text-white/65 hover:text-white">
                Pricing
              </a>

              <a href="#gallery" className="w-fit text-sm text-white/65 hover:text-white">
                Gallery
              </a>

              <a href="#faq" className="w-fit text-sm text-white/65 hover:text-white">
                FAQ
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E7CFA4]">
              Follow Us
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/65">
              Follow Laiba on social media for the latest henna designs,
              events and updates.
            </p>

            <div className="mt-6 flex gap-3">

              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#E7CFA4] hover:text-[#E7CFA4]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#E7CFA4] hover:text-[#E7CFA4]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.2h-3.24v13.7a2.93 2.93 0 1 1-2.93-2.93c.2 0 .4.02.59.06v-3.3a6.2 6.2 0 1 0 5.57 6.17V9.31a8.03 8.03 0 0 0 4.7 1.51V7.6c-.31 0-.62-.03-.92-.09Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#E7CFA4] hover:text-[#E7CFA4]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.55.45-1 1-1Z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Henna by Laiba. All rights reserved.
          </p>

          <p>
            Handcrafted with{" "}
            <span className="text-[#E7CFA4]">♥</span>{" "}
            and henna.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;