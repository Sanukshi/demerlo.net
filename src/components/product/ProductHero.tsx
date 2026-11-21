import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowDown, ArrowUpRight } from 'lucide-react'
import { site } from '../../data/content'
import { SectionShell } from '../ui/SectionShell'
import { Reveal } from '../ui/Reveal'

export function ProductHero() {
  const reduceMotion = useReducedMotion()

  return (
    <SectionShell id="product-hero" bare>
      <div className="surface-tint relative isolate overflow-hidden rounded-panel px-6 py-16 shadow-panel md:px-12 md:py-20 lg:px-16">
        <div aria-hidden="true" className="section-blobs" />
        <div aria-hidden="true" className="section-dots hidden md:block" />

        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-strong">
              Demerlo / Conversational Commerce &amp; Catalogue Intelligence
            </p>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-navy md:text-6xl lg:text-7xl">
              Structured Product Discovery and Recommendation Management.
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-navy/80 md:text-lg">
              Centralize e-commerce product catalogues, customer preference
              profiles, recommendation request workflows, and chatbot
              conversation histories in one role-based operational workspace.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.appUrl}
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--brand)] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
              >
                Open Application
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>
              <a
                href="#technical-architecture"
                className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white px-7 py-4 text-sm font-semibold text-navy transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
              >
                Explore Architecture
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pale text-[var(--brand)]">
                  <ArrowDown size={16} aria-hidden="true" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <motion.div
          aria-hidden="true"
          className="relative mx-auto mt-14 max-w-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.25 }}
        >
          <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-lift">
            <div className="flex items-center gap-3 border-b border-navy/10 bg-white px-4 py-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-[#F28B82]" />
                <span className="h-3 w-3 rounded-full bg-[#FBD36B]" />
                <span className="h-3 w-3 rounded-full bg-[#7CCB92]" />
              </div>
              <div className="min-w-0 flex-1 truncate rounded-full bg-page px-4 py-1.5 text-center text-xs text-muted sm:block">
                app.demerlo.net
              </div>
            </div>
            <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
              <div>
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-strong">
                  Core workflow
                </p>
                <ol className="mt-5 space-y-3" aria-label="Core product workflow">
                  {[
                    ['Catalogue & Categories', 'Register structured products, maintain taxonomy, and organise catalog visibility.'],
                    ['Customer Preferences', 'Capture explicit interests and preferences linked to customer profiles.'],
                    ['Recommendation Registry', 'Create, review, recommend, and close structured recommendation requests.'],
                    ['Conversation History', 'Retrieve sequential chatbot conversations tied to customer profiles.'],
                  ].map(([title, detail], i, arr) => (
                    <li key={title} className="flex items-start gap-4">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pale font-heading text-sm font-bold text-[var(--brand)]">
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-heading text-sm font-bold text-navy md:text-base">{title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-navy/70">{detail}</p>
                      </div>
                      {i < arr.length - 1 && (
                        <span aria-hidden="true" className="absolute h-px w-6 bg-[var(--border)]" />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
              <div
                aria-hidden="true"
                className="hidden h-40 w-40 shrink-0 items-center justify-center rounded-[32px] bg-gradient-to-br from-[var(--brand-tint)] to-[var(--accent-tint)] lg:flex"
              >
                <ArrowRight size={40} className="text-[var(--brand)]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  )
}
