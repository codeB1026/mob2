import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import Services from '@/Components/Services'
import Stats from '@/Components/Elements/Stats'
import WhyUs from '@/Components/WhyUs'
import FormPage from '@/Components/FormPage'
import Testimonal from '@/Components/Testimonal'
import Projects from '@/Components/Projects'
import  Team from "@/Components/Team"
import Discount from '@/Components/Elements/Discount'


export default function Home() {
  return (
      

        <div className='  '>
            <Navbar />
            <Hero />
            <Services />
            <Stats />
            <WhyUs />
            <FormPage />
            <Testimonal />
            <Projects />
            <Team />
            <Discount />      
        </div>
      
      
      
  )
}
