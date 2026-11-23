import { Shield, History, Mail, Lock } from 'lucide-react'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { Reveal } from '../ui/Reveal'

const governanceDefs = [
  {
    title: 'Role-Based Access Control',
    icon: Shield,
    description:
      'Dedicated permission boundaries across Administrator, Store Manager, Catalogue Manager, and Support Agent roles.',
  },
  {
    title: 'Catalogue & Record Traceability',
    icon: History,
    description:
      'Structured history of product status updates, category associations, and recommendation request state transitions.',
  },
  {
    title: 'Conversation & Activity Tracking',
    icon: Mail,
    description:
      'Auditable linkage between customer profiles, enquiry histories, and agent/system actions.',
  },
  {
    title: 'Strict Input Validation & Filtering',
    icon: Lock,
    description:
      'Server-side Laravel validation rules and structured search/filtering across products, categories, and customer records.',
  },
] as const

export function ProductGovernance() {
  return (
    <SectionShell id="governance-enterprise-readiness" surface="soft">
      <Reveal>
        <SectionTitle dark="Governance & Enterprise Readiness" accent="Verified Platform Requirements" />
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted text-center md:text-lg">
          Governance capabilities are grounded strictly in Demerlo's verified
          requirements. No SOC 2, ISO, GDPR, or encryption certifications are
          claimed.
        </p>
      </Reveal>

      <div className="relative mt-14 grid gap-6 md:gap-8 lg:grid-cols-2 xl:gap-10">
        {governanceDefs.map((card) => {
          const Icon = card.icon
          return (
            <article
              key={card.title}
              className="relative flex flex-col rounded-[26px] border border-[var(--border)] bg-white p-7 shadow-card hover:border-[var(--brand)]/40 transition-colors md:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pale font-heading text-sm font-bold text-navy md:text-lg">
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-navy">
                {card.title}
              </h3>
              <p className="mt-4 leading-relaxed text-navy/75">{card.description}</p>
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
