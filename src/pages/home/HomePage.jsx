import Navbar from "../../widgets/Navbar/Navbar";
import Hero from "../../widgets/Hero/Hero";
import About from "../../widgets/About/About";
import Services from "../../widgets/Services/Services";
import Pricing from "../../widgets/Pricing/Pricing";
import Gallery from "../../widgets/Gallery/Gallery";
import WhyChooseUs from "../../widgets/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../widgets/Testimonials/Testimonials";
import FAQ from "../../widgets/FAQ/FAQ";
import ContactCTA from "../../widgets/ContactCTA/ContactCTA";
import Footer from "../../widgets/Footer/Footer";
import WhatsAppButton from "../../features/whatsapp-contact/ui/WhatsAppButton";

function HomePage() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}

export default HomePage;