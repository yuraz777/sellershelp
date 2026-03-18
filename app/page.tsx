import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Pains from '@/components/Pains'
import HowWeWork from '@/components/HowWeWork'
import Cases from '@/components/Cases'
import Reviews from '@/components/Reviews'
import Pricing from '@/components/Pricing'
import Audit from '@/components/Audit'
import Team from '@/components/Team'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Pains />
      <HowWeWork />
      <Cases />
      <Reviews />
      <Pricing />
      <Audit />
      <Team />
      <FinalCTA />
      <Footer />
    </main>
  )
}
