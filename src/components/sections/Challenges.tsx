import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { challenges } from '../../data/content'
import { images } from '../../assets/images'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { TintedImage } from '../ui/TintedImage'
import { Reveal } from '../ui/Reveal'

const challengeIcons = [
  images.iconChallengeProduct,
  images.iconChallengePreference,
  images.iconChallengeAnalytics,
]

function SolutionArrow({ onDark = false }: { onDark?: boolean }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative z-10 -my-3 flex justify-center" aria-hidden="true">
      <motion.span
        className={[
          'inline-flex h-8 w-8 items-center justify-center rounded-full shadow-card',
          onDark ? 'bg-white text-strong' : 'bg-strong text-white',
        ].join(' ')}
        animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
        transition={
          reduceMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <ArrowDown size={16} strokeWidth={2.2} />
      </motion.span>
    </div>
  )
}

export function Challenges() {
  const reduceMotion = useReducedMotion()

  return (
    <SectionShell id="challenges" bare>
      <div className="surface-dark relative isolate overflow-hidden rounded-panel p-6 shadow-panel md:p-10 lg:p-14">
        <TintedImage
          src={images.challenges}
          alt={challenges.imageAlt}
          rounded="rounded-panel"
          className="!absolute inset-0 -z-20 h-full w-full"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[var(--dark-section)]/80" />
        <div aria-hidden="true" className="section-blobs" />

        <Reveal>
          <SectionTitle dark={challenges.titleDark} accent={challenges.titleAccent} invert />
        </Reveal>

        <ul className="mt-8 grid gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {challenges.cards.map((card, i) => {
            const icon = challengeIcons[i]
            const isDark = card.variant === 'dark'
            const isSoft = card.variant === 'soft'

            return (
              <motion.li
                key={card.number}
                className="h-full"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              >
                <motion.article
                  className={[
                    'flex h-full flex-col rounded-[24px] p-5 shadow-lift md:p-6',
                    isDark
                      ? 'bg-[linear-gradient(180deg,#2A2A45_0%,var(--dark-section)_100%)] text-white'
                      : isSoft
                        ? 'card-on-soft text-navy'
                        : 'bg-white text-navy',
                    'card-accent',
                  ].join(' ')}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center justify-between">
                    <img src={icon} alt="" className="h-12 w-12 object-contain" />
                    <span
                      className={[
                        'font-heading text-sm font-bold tracking-[0.16em]',
                        isDark ? 'text-accent' : 'text-strong',
                      ].join(' ')}
                    >
                      {card.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-bold leading-snug">{card.title}</h3>

                  <div
                    className={[
                      'mt-5 rounded-2xl px-4 py-3.5',
                      isDark ? 'bg-white/10' : 'bg-[#F4F7FA]',
                    ].join(' ')}
                  >
                    <p
                      className={[
                        'text-[11px] font-bold uppercase tracking-[0.14em]',
                        isDark ? 'text-accent' : 'text-strong',
                      ].join(' ')}
                    >
                      Problem
                    </p>
                    <p className={['mt-1.5 text-sm leading-relaxed', isDark ? 'text-white/80' : 'text-navy/75'].join(' ')}>
                      {card.problem}
                    </p>
                  </div>

                  <SolutionArrow onDark={isDark} />

                  <div
                    className={[
                      'rounded-2xl px-4 py-3.5',
                      isDark ? 'bg-white text-navy' : 'bg-strong text-white',
                    ].join(' ')}
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-current/80">
                      Solution
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed">{card.solution}</p>
                  </div>
                </motion.article>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </SectionShell>
  )
}
