import {
    Heart,
    Leaf,
    Sparkles,
    UserRound,
} from "lucide-react";

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

function WhyChooseUs() {
    return (
        <section className="bg-[#6B2737] py-20 sm:py-28">
            <Container>
                <SectionHeading
                    eyebrow="Why Laiba"
                    title="More than just henna"
                    description="A personal experience where artistry, attention to detail and your story come together."
                    theme="dark"
                />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason) => {
                        const Icon = reason.icon;

                        return (
                            <article
                                key={reason.id}
                                className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7CFA4] text-[#6B2737]">
                                    <Icon size={24} strokeWidth={1.7} />
                                </div>

                                <h3 className="mt-5 font-serif text-2xl text-white">
                                    {reason.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-white/70">
                                    {reason.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

export default WhyChooseUs;