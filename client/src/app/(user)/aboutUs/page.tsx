import Title from '@/components/user/Title';

import Whatsapp from '@/components/user/Whatsapp';
import about from "@/app/assets/img/AboutBg.webp"; // Correctly imported image
import Footer from '@/components/user/Footer';
import Experiance from '@/components/user/Experiance';
import Vision from '@/components/user/Vision';
import Mission from '@/components/user/Mission';
import WhoWeAre from '@/components/user/WhoWeAre';
import ClientsSection from '@/components/user/ClientsSection';
import Team from '@/components/user/Team';



export default function Home() {
  return (
    <div>
      <Title
        title="About Us"
        subTitle="At Digirib, we believe in the power of technology to transform businesses. As a leading digital solutions provider, we are dedicated to delivering innovative software development, UI/UX design, ERP solutions, app development, and more, tailored to help businesses scale and thrive in the modern world."
        backgroundImage={about.src}
      />
      <Experiance />
      <Vision />
      <Mission/>
      <WhoWeAre/>
      <ClientsSection/>
      <Team/>

      <Whatsapp />
      <Footer />

    </div>
  );
}
