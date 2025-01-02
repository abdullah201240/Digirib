import Footer from '@/components/user/Footer'
import Navbar from '@/components/user/Navbar'
import ProjectImg from '@/app/assets/img/Project.webp'
import React from 'react'
import Title from '@/components/user/Title'
import ProjectsCard from '@/components/user/ProjectsCard'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Title
                title="Projects"
                subTitle="Explore the impactful solutions we’ve developed across industries. Each project reflects our commitment to innovation, quality, and driving real results for our clients."
                backgroundImage={ProjectImg.src}
            />
            <ProjectsCard/>
        <Footer/>
      
    </div>
  )
}
