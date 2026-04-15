import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScrollProjects from "../components/ScrollProjects";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollProjects />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;
