
import AboutUs from "@/components/user/AboutUs";
import Blog from "@/components/user/Blog";
import ClientsSection from "@/components/user/ClientsSection";
import Experiance from "@/components/user/Experiance";
import Footer from "@/components/user/Footer";
import HeroSection from "@/components/user/HeroSection";
import Navbar from "@/components/user/Navbar";
import Services from "@/components/user/Services";
import Team from "@/components/user/Team";
import Testimonial from "@/components/user/Testimonial";
import Whatsapp from "@/components/user/Whatsapp";
import WhyDigirib from "@/components/user/WhyDigirib";

export default function Home() {

 

  return (
    <div>
      <Navbar />
      <HeroSection />
      
      <Experiance  />
      <AboutUs  />
      <WhyDigirib  />
      <Services  />
      <Testimonial  />
      <ClientsSection  />
      <Team/>
      <Blog  />
     
      <Whatsapp  />
      <Footer  />
    </div>
  );
}
