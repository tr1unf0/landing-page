export const metadata = {
  title: 'Triunfo Aureo',
  description: 'Discover our innovative solutions and services designed to streamline your business operations and drive success. Explore our range of products and offerings tailored to meet your unique needs. Join the countless satisfied customers who trust us to deliver excellence every step of the way',
}

// import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
// import Zigzag from '@/components/zigzag'
// import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Features />
      {/* <Zigzag />
      <Testimonials /> */}
      <Newsletter />
    </>
  )
}
