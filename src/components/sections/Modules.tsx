import { useState } from 'react'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { modules } from '../../data/content'
import { images } from '../../assets/images'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { TintedImage } from '../ui/TintedImage'
import { Reveal } from '../ui/Reveal'

const moduleIcons = [
  images.iconModuleCatalogue,
  images.iconModuleProfile,
  images.iconModuleRegistry,
  images.iconModuleChat,
  images.iconModuleDashboard,
  images.iconModuleCategory,
]

const cardStyles = [
  {
    article: 'bg-white text-navy shadow-card',
    iconWrap: 'bg-pale',
    number: 'text-strong',
    check: 'text-strong',
    bullet: 'text-navy/75',
    detail: 'bg-pale text-navy/80',
  },
  {
    article: 'bg-pale text-navy shadow-card',
    iconWrap: 'bg-white',
    number: 'text-strong',
    check: 'text-strong',
    bullet: 'text-navy/75',
    detail: 'bg-white text-navy/80',
  },
  {
    article: 'bg-strong text-white shadow-lift',
    iconWrap: 'bg-white/15',
    number: 'text-accent',
    check: 'text-accent',
    bullet: 'text-white/80',
    detail: 'bg-white/15 text-white/90',
  },
  {
    article: 'bg-white text-navy shadow-card',
    iconWrap: 'bg-pale',
    number: 'text-strong',
    check: 'text-strong',
    bullet: 'text-navy/75',
    detail: 'bg-pale text-navy/80',
  },
  {
    article: 'bg-navy text-white shadow-lift',
    iconWrap: 'bg-white/10',
    number: 'text-accent',
    check: 'text-accent',
    bullet: 'text-white/75',
    detail: 'bg-white/10 text-white/90',
  },
  {
    article: 'bg-pale text-navy shadow-card',
    iconWrap: 'bg-white',
    number: 'text-strong',
    check: 'text-strong',
    bullet: 'text-navy/75',
    detail: 'bg-white text-navy/80',
  },
] as const

export function Modules() {
  const reduceMotion = useReducedMotion()
  const [openId, setOpenId] = useState<string | null>(null)
  const openItem = modules.items.find((item) => item.number === openId) ?? null

  return (
    <SectionShell id="modules" bare>
      <div className="surface-tint relative isolate overflow-hidden rounded-panel p-6 shadow-panel md:p-10 lg:p-14">
        <div aria-hidden="true" className="section-blobs" />
        <div aria-hidden="true" className="section-dots hidden md:block" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-16 hidden h-20 w-20 rounded-full border border-[var(--border)] lg:block"
          animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <Reveal>
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-strong">
            Platform capabilities
          </p>
          <SectionTitle
            dark={modules.titleDark}
            accent={modules.titleAccent}
            className="mt-3"
          />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {modules.subtitle}
          </p>
        </Reveal>

        <div className="relative mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-8">
          <ul className="grid gap-4 sm:grid-cols-2">
            {modules.items.map((item, i) => {
              const style = cardStyles[i]
              const isOpen = openId === item.number
              const detailId = `module-detail-${item.number}`

              return (
                <motion.li
                  key={item.number}
                  className="h-full"
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.07, ease: 'easeOut' }}
                >
                  <motion.article
                    className={[
                      'card-accent group relative flex h-full flex-col overflow-hidden rounded-[26px] p-5 md:p-6',
                      style.article,
                      isOpen ? 'ring-2 ring-[var(--brand)]/35' : '',
                    ].join(' ')}
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={[
                          'inline-flex h-14 w-14 items-center justify-center rounded-2xl',
                          style.iconWrap,
                        ].join(' ')}
                      >
                        <img
                          src={moduleIcons[i]}
                          alt=""
                          className="h-9 w-9 object-contain"
                        />
                      </span>
                      <span
                        className={[
                          'font-heading text-sm font-bold tracking-[0.16em]',
                          style.number,
                        ].join(' ')}
                      >
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-5 font-heading text-base font-bold leading-snug md:text-[17px]">
                      {item.title}
                    </h3>

                    <ul className="mt-4 space-y-2.5">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className={[
                            'flex items-start gap-2.5 text-sm leading-relaxed',
                            style.bullet,
                          ].join(' ')}
                        >
                          <Check
                            size={15}
                            strokeWidth={2.4}
                            aria-hidden="true"
                            className={['mt-0.5 shrink-0', style.check].join(' ')}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={detailId}
                          key="detail"
                          initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p
                            className={[
                              'mt-4 rounded-2xl px-3.5 py-3 text-sm leading-relaxed',
                              style.detail,
                            ].join(' ')}
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                      <span
                        className={[
                          'text-xs font-semibold uppercase tracking-[0.12em]',
                          style.bullet,
                          isOpen ? 'opacity-100' : 'opacity-0',
                        ].join(' ')}
                      >
                        {isOpen ? 'Description' : ''}
                      </span>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={detailId}
                        aria-label={
                          isOpen
                            ? `Hide description for ${item.title}`
                            : `Show description for ${item.title}`
                        }
                        onClick={() =>
                          setOpenId((current) => (current === item.number ? null : item.number))
                        }
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-navy transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                      >
                        {isOpen ? (
                          <X size={16} strokeWidth={2.2} aria-hidden="true" />
                        ) : (
                          <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  </motion.article>
                </motion.li>
              )
            })}
          </ul>

          <Reveal delay={0.1} className="min-h-[360px] lg:min-h-0">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] shadow-lift lg:min-h-full lg:sticky lg:top-28">
              <TintedImage
                src={images.modules}
                alt={modules.imageAlt}
                rounded="rounded-[28px]"
                className="!absolute inset-0 h-full w-full"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"
              />
              <motion.div
                className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-navy shadow-card"
                animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                {openItem ? openItem.number : '6 modules'}
              </motion.div>
              <div className="absolute inset-x-4 bottom-4 z-10 rounded-[22px] border border-white/15 bg-navy/70 p-5 text-white shadow-lift backdrop-blur-md md:p-6">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={openItem ? openItem.number : 'default'}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                  >
                    {openItem ? (
                      <>
                        <p className="font-heading text-base font-semibold leading-snug md:text-lg">
                          {openItem.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/80">
                          {openItem.description}
                        </p>
                      </>
                    ) : (
                      <p className="font-heading text-base font-semibold leading-snug md:text-lg">
                        {modules.sideText}
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  )
}
