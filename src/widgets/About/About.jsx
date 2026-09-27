import Container from "../../shared/ui/Container/Container";
import SectionHeading from "../../shared/ui/SectionHeading/SectionHeading";
import minimal2 from "../../shared/assets/images/Minimal2.PNG";

function About() {
  return (
    <section id="about" className="bg-[#FAF6EF] py-16 sm:py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* Image */}
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl md:max-w-none md:rounded-4xl">
            <img
              src={minimal2}
              alt="Henna artist"
              className="
                h-72
                w-full
                object-cover
                sm:h-80
                md:h-125
              "
            />
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="About Laiba"
              title="The artist behind the art"
            />

            <div className="text-center md:text-left">
              <p className="text-base leading-7 text-[#5C4A43] sm:leading-8">
                Hi, I'm Laiba. I create handcrafted henna designs that blend
                traditional artistry with a modern touch.
              </p>

              <p className="mt-4 text-base leading-7 text-[#5C4A43] sm:mt-5 sm:leading-8">
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