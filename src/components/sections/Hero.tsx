import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { hero } from '../../data/content'
import { images } from '../../assets/images'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" aria-label="Demerlo hero" className="px-4 pt-6 md:px-6">
      <motion.div
        className="relative mx-auto max-w-[1280px] rounded-[32px] bg-white p-3 shadow-[0_24px_48px_rgba(31,42,55,0.10)] md:p-4"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="relative h-[560px] overflow-hidden rounded-[24px] sm:h-[600px] lg:h-[620px] lg:rounded-[28px]">
          <img
            src={images.hero}
            alt={hero.imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#0e1a28]/45" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35"
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 pt-16 text-center">
            <motion.h1
              className="max-w-4xl font-heading text-[28px] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[44px]"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.12 }}
            >
              {hero.title}
            </motion.h1>
            <motion.p
              className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-[15px]"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.3 }}
            >
              {hero.summary}
            </motion.p>
            <motion.a
              href={hero.secondaryHref}
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-strongBlue py-2 pl-5 pr-2 text-sm font-semibold text-white transition-colors hover:bg-[#2468A6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.45 }}
            >
              {hero.secondaryCta}
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-navy">
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
