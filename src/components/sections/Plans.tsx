import { Check } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { plans } from '../../data/content'
import { SectionShell } from '../ui/SectionShell'

export function Plans() {
  const reduceMotion = useReducedMotion()

  return (
    <SectionShell id="plans" bare className="py-6 md:py-10">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-heading text-4xl font-bold tracking-tight text-navy md:text-5xl">
          {plans.title}
        </h2>
        <p className="mt-3 text-sm text-muted md:text-base">{plans.subtitle}</p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-5xl items-stretch gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
        {plans.items.map((plan, i) => (
          <motion.li
            key={plan.name}
            className="h-full"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
          >
            <article className="relative h-full overflow-hidden rounded-[28px] p-[3px] shadow-[0_22px_50px_rgba(31,42,55,0.10)]">
              <span
                aria-hidden="true"
                className={[
                  'pricing-run-layer',
                  reduceMotion ? 'is-still' : '',
                  plan.highlighted ? 'is-strong' : '',
                ].join(' ')}
                style={reduceMotion ? undefined : { animationDelay: `${-i * 0.9}s` }}
              />
              <div className="relative flex h-full flex-col rounded-[25px] bg-white p-2.5">
              <div
                className={[
                  'rounded-[22px] px-5 pb-5 pt-5',
                  plan.highlighted
                    ? 'bg-[linear-gradient(180deg,#E6E9F8_0%,#D5E3F6_100%)]'
                    : 'bg-[#ECEEF2]',
                ].join(' ')}
              >
                <span className="inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-navy shadow-sm">
                  <span className={plan.highlighted ? 'uppercase tracking-[0.14em]' : ''}>
                    {plan.name}
                  </span>
                </span>

                <p className="mt-8 font-heading text-[40px] font-bold leading-none tracking-tight text-navy">
                  {plan.price}
                  {plan.period ? (
                    <span className="text-[22px] font-semibold tracking-tight">{plan.period}</span>
                  ) : null}
                </p>

                <p className="mt-4 text-sm font-semibold text-navy/80">{plan.audience}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{plan.description}</p>

                <a
                  href="#contact"
                  className="mt-5 flex w-full items-center justify-center rounded-full bg-navy px-4 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-strong"
                >
                  {plan.cta}
                </a>
              </div>

              <ul className="flex flex-1 flex-col gap-3 px-4 py-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-navy/85">
                    <Check
                      size={16}
                      strokeWidth={2.2}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-navy/35"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </SectionShell>
  )
}
