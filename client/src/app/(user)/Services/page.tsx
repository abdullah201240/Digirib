import Title from '@/components/user/Title'
import React from 'react'
import ServicesImg from '@/app/assets/img/Services.webp'
import Navbar from '@/components/user/Navbar'
import Footer from '@/components/user/Footer'
import Services from '@/components/user/Services'
import Testimonial from '@/components/user/Testimonial'
export default function page() {
  return (
    <div>
        <Navbar/>
        <Title
        title="Our Services"
        subTitle="At Digirib, we provide a range of innovative digital solutions tailored to meet your business needs. Explore our services and see how we can help you grow, scale, and succeed in the digital world. "
        backgroundImage={ServicesImg.src}
      />
      <Services/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
