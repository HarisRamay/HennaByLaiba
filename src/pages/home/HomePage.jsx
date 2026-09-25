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
        <div className="relative bg-[#2C211D]">
            <Navbar />

            {/* Main content */}
            <main className="relative z-10 bg-[#FAF6EF]">
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

            {/* Footer reveal area */}
            <div className="relative">
                <div className="sticky bottom-0 z-0">
                    <Footer />
                </div>
            </div>

            <WhatsAppButton />
        </div>
    );
}

export default HomePage;