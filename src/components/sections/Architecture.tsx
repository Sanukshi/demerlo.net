import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Check,
  Database,
  Globe,
  ListChecks,
  MonitorSmartphone,
  Plug,
  ShieldCheck,
  Users,
  LucideIcon,
} from 'lucide-react'
import { architecture } from '../../data/content'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { Reveal } from '../ui/Reveal'

const flowIcons: LucideIcon[] = [Users, Globe, Plug, Database]
const pillIcons: LucideIcon[] = [ShieldCheck, ListChecks, Activity, MonitorSmartphone]

function FlowPulse({
  index,
  direction,
}: {
  index: number
  direction: 'row' | 'column'
}) {
  const reduceMotion = useReducedMotion()
  const vertical = direction === 'column'

  return (
    <div
      aria-hidden="true"
      className={
        vertical
          ? 'relative mx-auto h-12 w-8'
          : 'relative h-10 w-full'
      }
    >
      <span
        className={
          vertical
            ? 'absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent via-strong to-accent/30'
            : 'absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-gradient-to-r from-accent via-strong to-accent/40'
        }
      />
      {reduceMotion ? (
        vertical ? (
          <ArrowDown size={16} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-strong" />
        ) : (
          <ArrowRight size={16} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-strong" />
        )
      ) : (
        <motion.span
          className="absolute h-2.5 w-2.5 rounded-full bg-strong shadow-[0_0_0_4px_rgba(47,128,201,0.18),0_0_14px_rgba(47,128,201,0.85)]"
          style={vertical ? { left: '50%', x: '-50%' } : { top: '50%', y: '-50%' }}
          animate={
            vertical
              ? { top: ['8%', '92%'], opacity: [0, 1, 1, 0] }
              : { left: ['4%', '96%'], opacity: [0, 1, 1, 0] }
          }
          transition={{
            duration: 1.35,
            repeat: Infinity,
            delay: index * 0.42,
            ease: 'easeInOut',
          }}
        />
      )}
    </div>
  )
}

export function Architecture() {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduceMotion) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % architecture.flow.length)
    }, 1700)
    return () => window.clearInterval(timer)
  }, [reduceMotion])

  return (
    <SectionShell id="architecture">
      <Reveal>
        <SectionTitle dark={architecture.titleDark} accent={architecture.titleAccent} />
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{architecture.lead}</p>
      </Reveal>

      <div className="relative mt-10 overflow-hidden rounded-[28px] border border-soft bg-[linear-gradient(165deg,#F8FBFE_0%,#E7F3FB_55%,#F7F9FB_100%)] px-4 py-8 shadow-card md:px-8 md:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle,#b7d4ea_1.1px,transparent_1.1px)] [background-size:20px_20px]"
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-accent/30 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 24, 0], y: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 bottom-6 h-44 w-44 rounded-full bg-strong/15 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, -18, 0], y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            {!reduceMotion && (
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-strong/60"
                animate={{ scale: [1, 2.1], opacity: [0.7, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
              />
            )}
            <span className="relative h-2.5 w-2.5 rounded-full bg-strong" />
          </span>
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-strong">
            Request path
          </p>
        </div>

        <ol className="relative mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)_3.5rem_minmax(0,1fr)_3.5rem_minmax(0,1fr)] lg:items-stretch">
          {architecture.flow.map((node, i) => {
            const Icon = flowIcons[i % flowIcons.length]
            const last = i === architecture.flow.length - 1
            const isActive = active === i

            return (
              <li key={node} className="contents">
                <motion.article
                  className={[
                    'relative flex flex-1 flex-col items-center rounded-card border bg-white px-4 pb-5 pt-7 text-center shadow-card',
                    isActive ? 'border-strong shadow-lift' : 'border-white',
                  ].join(' ')}
                  initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                  animate={
                    reduceMotion
                      ? undefined
                      : { y: isActive ? -6 : 0 }
                  }
                  whileHover={reduceMotion ? undefined : { y: -8 }}
                >
                  <span
                    className={[
                      'absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-0.5 font-heading text-[11px] font-bold tracking-[0.14em] text-white',
                      isActive ? 'bg-strong' : 'bg-navy',
                    ].join(' ')}
                  >
                    0{i + 1}
                  </span>
                  <span className="relative inline-flex h-14 w-14 items-center justify-center">
                    {isActive && !reduceMotion && (
                      <motion.span
                        className="absolute inset-0 rounded-2xl bg-strong/25"
                        animate={{ scale: [1, 1.45], opacity: [0.55, 0] }}
                        transition={{ duration: 1.3, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}
                    <span
                      className={[
                        'relative inline-flex h-14 w-14 items-center justify-center rounded-2xl',
                        isActive ? 'bg-strong text-white' : 'bg-pale text-strong',
                      ].join(' ')}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-bold leading-snug text-navy md:text-[15px]">
                    {node}
                  </h3>
                </motion.article>

                {!last && (
                  <li aria-hidden="true" className="flex items-center justify-center">
                    <span className="w-full lg:hidden">
                      <FlowPulse index={i} direction="column" />
                    </span>
                    <span className="hidden w-full lg:block">
                      <FlowPulse index={i} direction="row" />
                    </span>
                  </li>
                )}
              </li>
            )
          })}
        </ol>

        <ul className="relative mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {architecture.pills.map((pill, i) => {
            const Icon = pillIcons[i % pillIcons.length]
            return (
              <motion.li
                key={pill}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease: 'easeOut' }}
              >
                <motion.div
                  className="flex h-full items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3.5 shadow-card backdrop-blur-sm"
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                >
                  <motion.span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pale text-strong"
                    initial={reduceMotion ? false : { scale: 0.4, rotate: -12 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 320, damping: 16, delay: 0.25 + i * 0.08 }}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </motion.span>
                  <span className="text-sm font-semibold leading-snug text-navy">{pill}</span>
                  <Check size={15} strokeWidth={2.4} className="ml-auto shrink-0 text-strong" aria-hidden="true" />
                </motion.div>
              </motion.li>
            )
          })}
        </ul>

        <div className="relative mt-6 flex flex-col gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-4 backdrop-blur-sm md:flex-row md:items-center md:gap-5 md:px-5">
          <h3 className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-navy">Roles</h3>
          <ul className="flex flex-wrap gap-2">
            {architecture.roles.map((role, i) => (
              <motion.li
                key={role}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.86 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
                whileHover={reduceMotion ? undefined : { y: -3, scale: 1.04 }}
              >
                <span className="inline-flex items-center rounded-full bg-navy px-4 py-1.5 text-sm font-semibold text-white shadow-card">
                  {role}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}
