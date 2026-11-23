import { ArrowDown, ArrowRight, ShieldCheck, Users, Database, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { architecture } from '../../data/content'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { Reveal } from '../ui/Reveal'

const layerDefs = [
  {
    number: '01',
    title: 'Presentation & Access Layer',
    status: 'Active Core',
    description:
      'Responsive web interface supporting role-scoped views for Administrator, Store Manager, Catalogue Manager, and Support Agent.',
  },
  {
    number: '02',
    title: 'PHP / Laravel Application Layer',
    status: 'Active Core',
    description:
      'Handles authentication, role-based authorization, request validation, CRUD business logic, and internal product catalogue APIs.',
  },
  {
    number: '03',
    title: 'Structured SQL Data Layer',
    status: 'Active Core',
    description:
      'Relational persistence for products, categories, customer profiles, preferences, recommendation requests, conversation messages, and audit activity logs.',
  },
  {
    number: '04',
    title: 'Proposed AI & Inference Boundary',
    status: 'Proposed Future Layer',
    description:
      'Decoupled external service boundary designed for future REST/gRPC integration with containerized recommender and conversational inference services without disrupting transactional SQL operations.',
  },
] as const

const flowIcons = [Users, Globe, Database, ShieldCheck]

export function ProductArchitecture() {
  return (
    <SectionShell id="technical-architecture" surface="soft">
      <Reveal>
        <SectionTitle dark="Technical Architecture" accent="Active Core &amp; Future Boundary" />
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted text-center md:text-lg">
          The Demerlo platform is organized into discrete layers, separating
          active operational concerns from proposed future AI inference
          boundaries so transactional SQL operations are never disrupted.
        </p>
      </Reveal>

      <div className="relative mt-10 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--white)] px-6 py-8 shadow-card md:px-8 md:py-10 lg:px-12 lg:py-14">
        <div aria-hidden="true" className="section-dots" />
        <div className="relative flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative h-2.5 w-2.5 rounded-full bg-[var(--brand)]" />
          </span>
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-strong">
            Layered request path
          </p>
        </div>

        <ol className="relative mt-8 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)_4rem_minmax(0,1fr)_4rem_minmax(0,1fr)] lg:items-stretch">
          {layerDefs.map((layer, i) => {
            const Icon = flowIcons[i % flowIcons.length]
            const last = i === layerDefs.length - 1
            const isProposed = layer.status === 'Proposed Future Layer'
            return (
              <li key={layer.number} className="contents">
                <motion.article
                  className={[
                    'relative flex flex-1 flex-col items-center rounded-card border bg-white px-4 pb-5 pt-7 text-center shadow-card',
                    isProposed ? 'border-[var(--brand)]/30 ring-1 ring-[var(--brand)]/15' : 'border-white',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-0.5 font-heading text-[11px] font-bold tracking-[0.14em] text-white',
                      isProposed ? 'bg-[var(--brand)]' : 'bg-navy',
                    ].join(' ')}
                  >
                    {layer.number}
                  </span>
                  <span className="relative inline-flex h-14 w-14 items-center justify-center">
                    <span
                      className={[
                        'relative inline-flex h-14 w-14 items-center justify-center rounded-2xl',
                        isProposed ? 'bg-[var(--brand-tint)]' : 'bg-pale',
                      ].join(' ')}
                    >
                      <Icon size={22} strokeWidth={1.8} className={isProposed ? 'text-[var(--brand)]' : 'text-navy'} />
                    </span>
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-bold leading-snug text-navy md:text-[15px]">
                    {layer.title}
                  </h3>
                  <span
                    className={[
                      'mt-2 inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-[0.12em]',
                      isProposed
                        ? 'border-[var(--brand)]/30 bg-[var(--brand-tint)] text-[var(--brand)]'
                        : 'border-navy/10 bg-pale text-navy',
                    ].join(' ')}
                  >
                    {layer.status}
                  </span>
                </motion.article>

                {!last && (
                  <li aria-hidden="true" className="flex items-center justify-center">
                    <span className="w-full lg:hidden">
                      <ArrowDown size={16} className="text-[var(--brand)]" />
                    </span>
                    <span className="hidden w-full lg:block">
                      <ArrowRight size={16} className="text-[var(--brand)]" />
                    </span>
                  </li>
                )}
              </li>
            )
          })}
        </ol>

        <ul className="relative mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {architecture.pills.map((pill) => (
            <li key={pill} className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3.5 shadow-card backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck size={17} strokeWidth={1.8} className="shrink-0 text-[var(--brand)]" aria-hidden="true" />
                <span className="text-sm font-semibold text-navy">{pill}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="relative mt-6 flex flex-col gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-4 backdrop-blur-sm md:flex-row md:items-center md:gap-5 md:px-5">
          <h3 className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-navy">Roles</h3>
          <ul className="flex flex-wrap gap-2">
            {architecture.roles.map((role) => (
              <li key={role}>
                <span className="inline-flex items-center rounded-full bg-navy px-4 py-1.5 text-sm font-semibold text-white shadow-card">
                  {role}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {layerDefs.map((layer) => (
            <article key={layer.number} className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm">
              <h4 className="font-heading text-sm font-bold text-navy">{layer.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-navy/75">{layer.description}</p>
              <span className={[
                'inline-block mt-3 rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-[0.12em]',
                layer.status === 'Proposed Future Layer'
                  ? 'border-[var(--brand)]/30 bg-[var(--brand-tint)] text-[var(--brand)]'
                  : 'border-navy/10 bg-pale text-navy',
              ].join(' ')}>{layer.status}</span>
            </article>
          ))}
        </Reveal>
      </div>
    </SectionShell>
  )
}
