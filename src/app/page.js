import About from "@/components/pages/home/About/About";
import Achievement from "@/components/pages/home/Achievement/Achievement";
import Banner from "@/components/pages/home/Banner/Banner";
import BestForYou from "@/components/pages/home/BestForYou/BestForYou";
import Gallery from "@/components/pages/home/Gallery/Gallery";
import { GetInTouch } from "@/components/pages/home/getInTouch/GetInTouch";
import Portfolio from "@/components/pages/home/Portfolio/Portfolio";
import Testimonial from "@/components/pages/home/Testimonial/Testimonial";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs/WhyChooseUs";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Achievement />
      <WhyChooseUs />
      <BestForYou />
      <Portfolio />
      <Testimonial />
      <Gallery />
      <GetInTouch />
      <Footer />
    </div>
  );
}
