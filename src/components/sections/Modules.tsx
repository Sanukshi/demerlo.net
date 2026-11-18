import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
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

export function Modules() {
  const reduceMotion = useReducedMotion()

  return (
    <SectionShell id="modules">
      <Reveal>
        <SectionTitle dark={modules.titleDark} accent={modules.titleAccent} />
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {modules.subtitle}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
        <ul className="grid gap-5 md:grid-cols-2">
          {modules.items.map((item, i) => {
            return (
              <motion.li
                key={item.number}
                className="h-full"
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08, ease: 'easeOut' }}
              >
                <motion.article
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-navy/5 bg-white p-5 shadow-card"
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#2F80C9,#7DB9E8)] transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <img src={moduleIcons[i]} alt="" className="h-12 w-12 object-contain" />
                    <span className="font-heading text-sm font-bold tracking-[0.16em] text-strong">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold leading-snug text-navy">
                    {item.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm leading-relaxed text-navy/80">
                        <Check
                          size={15}
                          strokeWidth={2.4}
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-strong"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </motion.li>
            )
          })}
        </ul>

        <Reveal delay={0.1} className="min-h-[360px] lg:min-h-0">
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-card shadow-card lg:min-h-[560px]">
            <TintedImage
              src={images.modules}
              alt={modules.imageAlt}
              className="!absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-x-4 bottom-4 z-10 rounded-card bg-blue-panel p-5 text-white shadow-lift md:p-6">
              <p className="font-heading text-base font-semibold leading-snug md:text-lg">
                {modules.sideText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
