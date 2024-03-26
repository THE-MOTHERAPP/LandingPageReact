import Hero from "../components/Hero";
import Features from "../components/Features";

import About from "../components/About";
import Footer from "../components/Footers";
import Cta from "../components/Cta";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
    
      <Cta />
      <About />

      <Footer />
     
    </div>
  );
};

export default Home;
