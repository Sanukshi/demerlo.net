import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import {
  Hero,
  Challenges,
  Modules,
  Markets,
  UseCases,
  Architecture,
  Preview,
  Readiness,
  Plans,
  Contact,
  Testimonials,
} from '../components/sections'

export function HomePage() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname === '/home') {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [pathname, hash])

  return (
    <div id="top" className="min-h-screen bg-[var(--soft-grey)]">
      <Navbar />
      <main className="space-y-6 pb-10 md:space-y-8 md:pb-14">
        <Hero />
        <Challenges />
        <Modules />
        <Markets />
        <UseCases />
        <Architecture />
        <Preview />
        <Readiness />
        <Plans />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
