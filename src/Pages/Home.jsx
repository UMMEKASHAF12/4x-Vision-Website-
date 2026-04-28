import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScrollProjects from "../components/ScrollProjects";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollProjects />
      <Testimonials />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;
