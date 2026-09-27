import { useEffect, useRef, useState } from "react";
import { Heart, Leaf, Sparkles, UserRound, ArrowRight } from "lucide-react";

import Container from "../../shared/ui/Container/Container";
import SectionHeading from "../../shared/ui/SectionHeading/SectionHeading";

const reasons = [
    {
        id: 1,
        icon: Sparkles,
        title: "Handcrafted Designs",
        description:
            "Every design is carefully drawn by hand with attention to detail and balance.",
    },
    {
        id: 2,
        icon: UserRound,
        title: "Personalized Experience",
        description:
            "Your design can be tailored to your style, outfit, occasion and preferences.",
    },
    {
        id: 3,
        icon: Leaf,
        title: "Quality Henna",
        description:
            "I focus on creating beautiful, clean designs using quality henna for a lovely finish.",
    },
    {
        id: 4,
        icon: Heart,
        title: "Made With Care",
        description:
            "From the first conversation to the final design, every detail is handled with care.",
    },
];

function WhyChooseUsCard({ reason }) {
    const Icon = reason.icon;

    return (
        <article className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7CFA4] text-[#6B2737]">
                <Icon size={24} strokeWidth={1.7} />
            </div>

            {/* Title */}
            <h3 className="mt-5 font-serif text-2xl text-white">
                {reason.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-white/70">
                {reason.description}
            </p>
        </article>
    );
}

function WhyChooseUs() {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const cards = carousel.children;

        if (!cards.length) return;

        const cardWidth = cards[0].offsetWidth;
        const gap = 16;

        const index = Math.round(
            carousel.scrollLeft / (cardWidth + gap)
        );

        setActiveIndex(
            Math.min(Math.max(index, 0), reasons.length - 1)
        );
    };

    const scrollToCard = (index) => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const card = carousel.children[index];

        if (!card) return;

        card.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });

        setActiveIndex(index);
    };

    useEffect(() => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        carousel.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            carousel.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#6B2737] py-20 sm:py-28">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

            <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#E7CFA4]/10 blur-3xl" />

            <Container>
                <SectionHeading
                    eyebrow="Why Laiba"
                    title="More than just henna"
                    description="A personal experience where artistry, attention to detail and your story come together."
                    theme="dark"
                />

                {/* =================================
                    MOBILE WHY CHOOSE US CAROUSEL
                ================================== */}
                <div className="relative mt-8 md:hidden">
                    {/* Swipe indicator */}
                    <div className="mb-3 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#E7CFA4]">
                        <span>Swipe for more</span>

                        <ArrowRight
                            size={17}
                            strokeWidth={2}
                            className="animate-[swipeArrow_1.2s_ease-in-out_infinite]"
                        />
                    </div>

                    {/* Carousel */}
                    <div className="relative">
                        {/* Left fade */}
                        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-5 bg-gradient-to-r from-[#6B2737] to-transparent" />

                        {/* Right fade */}
                        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#6B2737] to-transparent" />

                        <div
                            ref={carouselRef}
                            onScroll={handleScroll}
                            className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-2 pb-5"
                        >
                            {reasons.map((reason) => (
                                <div
                                    key={reason.id}
                                    className="w-[82vw] max-w-[420px] shrink-0 snap-center"
                                >
                                    <WhyChooseUsCard reason={reason} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination bubbles */}
                    <div className="mt-1 flex items-center justify-center gap-2">
                        {reasons.map((reason, index) => (
                            <button
                                key={reason.id}
                                type="button"
                                onClick={() => scrollToCard(index)}
                                aria-label={`Show ${reason.title}`}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    activeIndex === index
                                        ? "w-7 bg-[#E7CFA4]"
                                        : "w-2.5 bg-white/30 hover:bg-white/50"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* =================================
                    TABLET / DESKTOP
                ================================== */}
                <div className="mx-auto mt-12 hidden md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
                    {reasons.map((reason) => (
                        <WhyChooseUsCard
                            key={reason.id}
                            reason={reason}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default WhyChooseUs;