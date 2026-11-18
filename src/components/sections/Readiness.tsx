import { Check, CheckCircle2, History, Shield, LucideIcon } from 'lucide-react'
import { readiness } from '../../data/content'
import { images } from '../../assets/images'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { TintedImage } from '../ui/TintedImage'
import { GlassCard } from '../ui/GlassCard'
import { IconBadge } from '../ui/IconBadge'
import { Reveal } from '../ui/Reveal'

const iconMap: Record<(typeof readiness.cards)[number]['icon'], LucideIcon> = {
  Shield,
  History,
  CheckCircle2,
}

export function Readiness() {
  return (
    <SectionShell id="readiness" bare>
      <div className="relative isolate overflow-hidden rounded-panel shadow-panel">
        <TintedImage
          src={images.readiness}
          alt={readiness.imageAlt}
          rounded="rounded-panel"
          className="!absolute inset-0 -z-20 h-full w-full"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/55 via-navy/20 to-navy/10"
        />

        <div className="flex min-h-[560px] flex-col justify-between gap-12 p-8 md:p-10 lg:min-h-[620px] lg:p-14">
          <Reveal>
            <SectionTitle
              dark={readiness.titleDark}
              accent={readiness.titleAccent}
              invert
            />
          </Reveal>

          <ul className="grid gap-5 md:grid-cols-3">
            {readiness.cards.map((card, i) => {
              const Icon = iconMap[card.icon]
              return (
                <li key={card.title}>
                  <Reveal delay={i * 0.1} className="h-full">
                    <GlassCard padding="lg" className="h-full">
                      <IconBadge icon={Icon} />
                      <h3 className="mt-4 font-heading text-base font-bold text-navy">
                        {card.title}
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-navy/85"
                          >
                            <Check
                              size={16}
                              strokeWidth={2.5}
                              className="mt-0.5 shrink-0 text-strong"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}
