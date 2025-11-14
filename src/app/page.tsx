import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing/Pricing";
import Benefits from "../components/Benefits/Benefits";
import Container from "../components/Container";
import Section from "../components/Section";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

function HomePage() {
  return (
    <>
      <Hero />
      <Container>
        <Stats />
        <Benefits />
        {/* <Section
          id="pricing"
          title="Pricing"
          description="Choose the plan that’s right for you."
        >
          <Pricing />
        </Section> */}
        <CTA />
      </Container>
    </>
  );
}

export default HomePage;
