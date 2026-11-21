import { Check } from 'lucide-react'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { Reveal } from '../ui/Reveal'

const useCaseDefs = [
  {
    title: 'Online Retailers',
    description:
      'Organize multi-category SKU catalogues and standardize customer enquiry handling across merchandising and support teams.',
  },
  {
    title: 'Digital Marketplaces',
    description:
      'Maintain structured category taxonomies and track high-volume product recommendation requests across diverse buyer preferences.',
  },
  {
    title: 'Consumer Product Brands',
    description:
      'Capture direct shopper preference profiles and analyze product engagement trends across seasonal collections.',
  },
  {
    title: 'Retail Technology Providers',
    description:
      'Deploy a structured Laravel/SQL product discovery management core ready for future inference microservice integration.',
  },
]

export function ProductUseCases() {
  return (
    <SectionShell id="use-cases-industry" surface="white">
      <div aria-hidden="true" className="section-blobs opacity-50" />
      <Reveal>
        <SectionTitle dark="Target Industry Use Cases" accent="Operational Alignment" />
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted text-center md:text-lg">
          Four concise operational use cases mapped to Demerlo's target
          market — no invented client names or testimonials.
        </p>
      </Reveal>

      <div className="relative mt-14 grid gap-6 md:gap-8 lg:grid-cols-2 xl:gap-10">
        {useCaseDefs.map((uc) => (
          <article
            key={uc.title}
            className="relative flex flex-col rounded-[26px] border border-[var(--border)] bg-white p-7 shadow-card hover:border-[var(--brand)]/40 transition-colors md:p-8"
          >
            <h3 className="font-heading text-lg font-bold leading-snug text-navy">
              {uc.title}
            </h3>
            <ul className="mt-5 space-y-2.5">
              <li className="flex items-start gap-3">
                <Check size={17} strokeWidth={2.2} className="mt-0.5 shrink-0 text-[var(--brand)]" aria-hidden="true" />
                <span className="leading-relaxed text-navy/75">{uc.description}</span>
              </li>
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}