import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCases } from '../../data/content'
import { images } from '../../assets/images'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { TintedImage } from '../ui/TintedImage'
import { GlassCard } from '../ui/GlassCard'
import { Toggle } from '../ui/Toggle'
import { Reveal } from '../ui/Reveal'

type UseCaseId = (typeof useCases.items)[number]['id']
type DefaultVariant = (typeof useCases.items)[number]['defaultVariant']

const iconMap: Record<string, string> = {
  preference: images.iconPreference,
  category: images.iconUseCaseCategory,
  support: images.iconUseCaseSupport,
}

const imageMap: Record<string, string> = {
  preference: images.useCasePreference,
  category: images.useCaseCategory,
  support: images.useCaseSupport,
}

const inactiveStyles: Record<DefaultVariant, { row: string; text: string; icon: string; toggle: 'light' | 'dark' }> = {
  white: {
    row: 'bg-white text-navy border border-navy/10',
    text: 'text-muted',
    icon: 'bg-pale text-strong',
    toggle: 'light',
  },
  active: {
    row: 'bg-soft text-navy border border-transparent',
    text: 'text-navy/70',
    icon: 'bg-white text-strong',
    toggle: 'light',
  },
  dark: {
    row: 'bg-dark text-white border border-transparent',
    text: 'text-white/70',
    icon: 'bg-white/15 text-accent',
    toggle: 'dark',
  },
}

export function UseCases() {
  const reduceMotion = useReducedMotion()
  const [activeId, setActiveId] = useState<UseCaseId>(useCases.items[1].id)
  const active = useCases.items.find((i) => i.id === activeId) ?? useCases.items[1]

  return (
    <SectionShell id="use-cases">
      <Reveal>
        <SectionTitle dark={useCases.titleDark} accent={useCases.titleAccent} />
      </Reveal>

      <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <ul className="flex flex-col gap-4">
          {useCases.items.map((item, i) => {
            const isActive = item.id === activeId
            const styles = inactiveStyles[item.defaultVariant]
            const icon = iconMap[item.id] ?? images.iconPreference
            return (
              <li key={item.id} className="flex-1">
                <Reveal delay={i * 0.1} className="h-full">
                  <div
                    className={[
                      'flex h-full items-center gap-3 rounded-card p-4 shadow-card transition-colors duration-200 md:p-5',
                      isActive
                        ? 'border border-transparent bg-strong text-white'
                        : styles.row,
                    ].join(' ')}
                  >
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveId(item.id)}
                      className="flex min-w-0 flex-1 items-start gap-4 rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      <img src={icon} alt="" className="h-11 w-11 shrink-0 rounded-xl object-contain" />
                      <span className="min-w-0">
                        <span className="block font-heading text-base font-bold leading-snug">
                          {item.title}
                        </span>
                        <span
                          className={[
                            'mt-1 block text-sm leading-relaxed',
                            isActive ? 'text-white/85' : styles.text,
                          ].join(' ')}
                        >
                          {item.description}
                        </span>
                      </span>
                    </button>
                    <Toggle
                      checked={isActive}
                      onChange={() => setActiveId(item.id)}
                      label={`Show ${item.title}`}
                      variant={isActive ? 'strong' : styles.toggle}
                    />
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <Reveal delay={0.1} className="min-h-[380px] lg:min-h-[480px]">
          <div className="relative h-full min-h-[380px] overflow-hidden rounded-card shadow-card lg:min-h-[480px]">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={active.id}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.4 }}
              >
                <TintedImage
                  src={imageMap[active.id]}
                  alt={active.imageAlt}
                  className="!absolute inset-0 h-full w-full"
                />
              </motion.div>
            </AnimatePresence>

            <div
              className="absolute inset-x-4 bottom-4 z-10 grid gap-3 md:grid-cols-2"
              aria-live="polite"
            >
              {active.captions.map((caption) => (
                <GlassCard key={`${active.id}-${caption}`} padding="sm">
                  <p className="text-sm font-medium leading-snug text-navy">
                    {caption}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
