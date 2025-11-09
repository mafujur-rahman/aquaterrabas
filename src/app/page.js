import About from "@/components/pages/home/About/About";
import Achievement from "@/components/pages/home/Achievement/Achievement";
import Banner from "@/components/pages/home/Banner/Banner";
import BestForYou from "@/components/pages/home/BestForYou/BestForYou";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs/WhyChooseUs";
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
    </div>
  );
}
