import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Featured from "../components/Featured";
import Services from "../components/Services";
import About from "../components/About";
import Agents from "../components/Agents";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#08111F] text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />

        <Stats />

        <Featured />

        <Services />

        <About />

        <Agents />

        <Testimonials />

        <Blog />

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;