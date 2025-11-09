import About from "@/components/pages/home/About/About";
import Banner from "@/components/pages/home/Banner/Banner";
import Navbar from "@/components/shared/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
    </div>
  );
}
