import { Quote, Star } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { testimonials } from '../../data/content'
import { images } from '../../assets/images'
import { SectionShell } from '../ui/SectionShell'

const clientPhotos = {
  priya: images.clientPriya,
  james: images.clientJames,
  lena: images.clientLena,
} as const

function Stars({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={1.6}
          aria-hidden="true"
          className={onDark ? 'fill-white text-white' : 'fill-strong text-strong'}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const reduceMotion = useReducedMotion()

  return (
    <SectionShell id="testimonials" bare>
      <div className="surface-soft relative overflow-hidden rounded-[32px] px-4 py-10 md:px-8 md:py-14">
        <div aria-hidden="true" className="section-blobs" />
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--white)] px-4 py-8 shadow-panel md:px-10 md:py-12">
          <div aria-hidden="true" className="section-dots hidden md:block" />
          <div aria-hidden="true" className="pointer-events-none absolute right-8 top-8 hidden gap-3 md:flex">
            <span className="h-14 w-12 rounded-t-[16px] border-2 border-[var(--border)]" />
            <span className="mt-3 h-16 w-12 rounded-t-[16px] border-2 border-[var(--border)]" />
          </div>

          <div className="relative mx-auto max-w-xl text-center">
            <span aria-hidden="true" className="heading-bar mx-auto" />
            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-strong">
              {testimonials.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-navy md:text-[44px]">
              {testimonials.titleLead}
              <span className="mt-1 block font-semibold italic text-strong">{testimonials.titleAccent}</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{testimonials.subtitle}</p>
          </div>

          <ul className="relative mt-10 grid gap-4 md:grid-cols-3 md:items-stretch">
            {testimonials.items.map((item, i) => (
              <motion.li
                key={item.name}
                className="h-full"
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              >
                <article
                  className={[
                    'card-accent relative flex h-full flex-col rounded-[22px] p-5',
                    item.highlighted
                      ? 'bg-[linear-gradient(180deg,var(--brand)_0%,var(--brand-dark)_100%)] text-white shadow-lift'
                      : 'card-on-white text-navy',
                  ].join(' ')}
                >
                  {item.highlighted && (
                    <Quote
                      aria-hidden="true"
                      size={42}
                      strokeWidth={1.4}
                      className="absolute right-4 top-4 text-white/25"
                    />
                  )}
                  <Stars onDark={item.highlighted} />
                  <p
                    className={[
                      'mt-4 flex-1 text-sm leading-relaxed',
                      item.highlighted ? 'text-white/95' : 'text-navy/80',
                    ].join(' ')}
                  >
                    “{item.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={clientPhotos[item.photo]}
                      alt=""
                      className={[
                        'h-12 w-12 shrink-0 rounded-full object-cover',
                        item.highlighted ? 'ring-2 ring-white/80' : 'ring-2 ring-pale',
                      ].join(' ')}
                    />
                    <div>
                      <p className="text-sm font-semibold leading-tight">{item.name}</p>
                      <p
                        className={[
                          'mt-0.5 text-xs',
                          item.highlighted ? 'text-white/75' : 'text-muted',
                        ].join(' ')}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>

          <p className="mt-8 text-center font-heading text-sm italic text-navy/55">{testimonials.closing}</p>
          <p className="mt-3 text-center">
            <a
              href={testimonials.ctaHref}
              className="inline-flex items-center gap-1 text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              {testimonials.cta}
              <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
