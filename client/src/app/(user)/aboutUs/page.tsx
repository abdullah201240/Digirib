



import AboutUsTitle from '@/components/user/Title';

import Whatsapp from '@/components/user/Whatsapp';
import about from "@/app/assets/img/AboutBg.webp"; // Correctly imported image

// Dynamically load other components that are not critical for initial rendering


export default function Home() {
  return (
    <div>
     <AboutUsTitle
                title="Blog"
                subTitle="Explore our blog for the latest trends, tips, and expert insights on software development, UI/UX design, digital transformation, and more. Stay ahead of the curve with actionable content that helps you navigate the digital landscape."
                backgroundImage={about.src}
            />

     
      <Whatsapp/>

    </div>
  );
}
