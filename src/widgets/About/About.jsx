import Container from "../../shared/ui/Container/Container";
import SectionHeading from "../../shared/ui/SectionHeading/SectionHeading";

function About() {
  return (
    <section id="about" className="bg-[#FAF6EF] py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85"
              alt="Henna artist"
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="About Laiba"
              title="The artist behind the art"
            />

            <div className="text-center md:text-left">
              <p className="text-base leading-8 text-[#5C4A43]">
                Hi, I'm Laiba. I create handcrafted henna designs that blend
                traditional artistry with a modern touch.
              </p>

              <p className="mt-5 text-base leading-8 text-[#5C4A43]">
                Every design is created with attention to detail and a personal
                touch, making your henna experience as special as the occasion
                itself.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;