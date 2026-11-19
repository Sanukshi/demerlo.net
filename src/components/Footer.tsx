import { ArrowUpRight, Facebook, Linkedin, Twitter, Youtube, LucideIcon } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { footer, site } from '../data/content'
import { Logo } from './ui/Logo'
import { Reveal } from './ui/Reveal'

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  X: Twitter,
  Facebook,
  YouTube: Youtube,
}

export function Footer() {
  const reduceMotion = useReducedMotion()

  return (
    <footer className="mt-4 px-4 pb-6 md:px-6 lg:px-8">
      <div className="surface-dark relative mx-auto max-w-site overflow-hidden rounded-panel text-white shadow-panel">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'linear-gradient(160deg, transparent 40%, color-mix(in srgb, var(--brand) 45%, transparent) 100%)',
          }}
        />
        <div aria-hidden="true" className="section-blobs" />
        <div aria-hidden="true" className="section-dots hidden md:block" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-10 top-10 hidden h-24 w-24 rounded-full border border-white/10 md:block"
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-24 right-16 hidden h-16 w-16 rounded-full border border-white/10 md:block"
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative p-8 md:p-10 lg:p-14">
          <Reveal>
            <div className="flex flex-col gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                  {footer.eyebrow}
                </p>
                <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight tracking-tight md:text-3xl lg:text-[34px]">
                  {footer.headline}
                </h2>
              </div>
              <a
                href={footer.ctaHref}
                className="group inline-flex items-center gap-2 self-start rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-accent/50 hover:bg-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:self-auto"
              >
                {footer.cta}
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,2fr)] lg:gap-16">
            <Reveal delay={0.05}>
              <div className="max-w-md">
                <div className="inline-flex items-center rounded-full bg-white px-4 py-2.5 shadow-[0_8px_24px_rgba(31,42,55,0.12)]">
                  <Logo href="/home" />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/70">
                  {footer.description}
                </p>
                <ul className="mt-7 flex flex-wrap items-center gap-3" aria-label="Social media">
                  {footer.social.map((s, i) => {
                    const Icon = socialIcons[s.label]
                    if (!Icon) return null
                    return (
                      <motion.li
                        key={s.label}
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.08 + i * 0.05 }}
                      >
                        <a
                          href={s.href}
                          aria-label={s.label}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-accent/50 hover:bg-strong hover:text-white hover:shadow-[0_10px_24px_rgba(55,96,249,0.35)]"
                        >
                          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                        </a>
                      </motion.li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <nav
                aria-label="Footer"
                className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10"
              >
                {footer.columns.map((col) => (
                  <div key={col.title}>
                    <h2 className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-accent">
                      {col.title}
                    </h2>
                    <ul className="mt-5 space-y-3.5">
                      {col.links.map((link) => (
                        <li key={`${col.title}-${link.label}`}>
                          <a
                            href={link.href}
                            className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                          >
                            <span className="relative">
                              {link.label}
                              <span
                                aria-hidden="true"
                                className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full"
                              />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </Reveal>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {site.name}. All rights reserved.</p>
            <p className="font-heading tracking-[0.08em] text-white/45">{site.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
