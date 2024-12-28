import AboutUs from "@/components/user/AboutUs";
import Experiance from "@/components/user/Experiance";
// import Footer from "@/components/user/Footer";
import HeroSection from "@/components/user/HeroSection";
import Navbar from "@/components/user/Navbar";
import Testimonial from "@/components/user/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Experiance/>
      <AboutUs/>
      <Testimonial/>
        {/* <Footer/> */}
    </div>
  );
}
