import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { hero } from '../../data/content'
import { images } from '../../assets/images'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      aria-label="Demerlo hero"
      className="relative min-h-screen w-full scroll-mt-28 overflow-hidden"
    >
      <img
        src={images.hero}
        alt={hero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[var(--dark-section)]/45" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"
      />
      <div aria-hidden="true" className="hero-glow" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pb-10 pt-24 text-center md:px-8">
        <motion.h1
          className="max-w-5xl font-heading text-[32px] font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[56px]"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.12 }}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.3 }}
        >
          {hero.summary}
        </motion.p>
        <motion.a
          href={hero.secondaryHref}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--brand)] py-2.5 pl-6 pr-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.45 }}
        >
          {hero.secondaryCta}
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy">
            <ArrowRight size={16} aria-hidden="true" />
          </span>
        </motion.a>
      </div>
    </section>
  )
}
