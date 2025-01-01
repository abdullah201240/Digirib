import Navbar from '@/components/user/Navbar'
import Title from '@/components/user/Title'
import React from 'react'
import Contact from '@/app/assets/img/Contact.webp'
import ContactInfo from '@/components/user/ContactInfo'
import Whatsapp from '@/components/user/Whatsapp'
import Footer from '@/components/user/Footer'
import ContactMap from '@/components/user/ContactMap'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Title
                title="Contact Us"
                subTitle="We’re here to help! Whether you have a question about our services, need a custom solution, or just want to explore how Digirib can support your business, feel free to reach out. Our team is ready to assist you."
                backgroundImage={Contact.src}
            />
      <ContactInfo/>
      <ContactMap/>
      <Whatsapp/>
      <Footer/>
    </div>
  )
}
