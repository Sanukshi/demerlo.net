import { Check } from 'lucide-react'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { Reveal } from '../ui/Reveal'

const moduleDefs = [
  {
    number: '01',
    title: 'Product Catalogue Management',
    status: 'Active Core',
    manages:
      'Register products with structured descriptions, pricing, and product imagery; update product attributes; toggle active/inactive catalogue visibility status.',
    operations: ['Product registration', 'Attribute updates', 'Visibility toggle'],
  },
  {
    number: '02',
    title: 'Product Category Management',
    status: 'Active Core',
    manages:
      'Create and maintain hierarchical or structured product categories, assign category descriptions, link products to categories, and power category-based catalogue filtering.',
    operations: ['Category creation', 'Product-category linking', 'Category filtering'],
  },
  {
    number: '03',
    title: 'Customer Profile Management',
    status: 'Active Core',
    manages:
      'Register customer profiles, record explicit shopping preferences and product interests, link interaction references, and maintain chronological customer activity records.',
    operations: ['Profile registration', 'Preference tracking', 'Activity records'],
  },
  {
    number: '04',
    title: 'Recommendation Request Registry',
    status: 'Active Core',
    manages:
      'Create and track structured recommendation requests (New, In Review, Recommended, Closed), capture customer interest criteria, and associate curated product recommendations with each request.',
    operations: ['Request tracking', 'Status lifecycle', 'Recommendation association'],
  },
  {
    number: '05',
    title: 'Chatbot Conversation History',
    status: 'Active Core',
    manages:
      'Store customer enquiry records and sequential conversation messages, link chat threads to customer profiles, and retrieve historical interactions to prevent repeated enquiry friction.',
    operations: ['Conversation storage', 'Profile linking', 'Interaction retrieval'],
  },
  {
    number: '06',
    title: 'Product Performance Dashboard',
    status: 'Active Core',
    manages:
      'Aggregate operational metrics including total registered products, category distribution, recommendation request status breakdowns, customer interaction counts, popular product records, and recent chatbot activity.',
    operations: ['Metric aggregation', 'Status breakdowns', 'Engagement records'],
  },
]

function StatusBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-white px-3 py-1 text-[11px] font-semibold text-navy shadow-sm">
      {children}
    </span>
  )
}

export function ProductModules() {
  return (
    <SectionShell id="product-modules" surface="soft">
      <Reveal>
        <SectionTitle dark="Core Product Modules" accent="Operational Platform" className="text-center" />
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted text-center md:text-lg">
          Six active core modules cover catalogue, preference, recommendation, and conversation workflows within one role-based workspace.
        </p>
      </Reveal>

      <div className="relative mt-14 grid gap-6 md:gap-8 lg:grid-cols-3 xl:gap-10">
        {moduleDefs.map((module) => (
          <article
            key={module.number}
            className="relative flex flex-col rounded-[26px] border border-[var(--border)] bg-white p-7 md:p-8 shadow-card hover:border-[var(--brand)]/40 transition-colors"
          >
            <div className="mb-4 flex items-start gap-3">
              <span
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pale font-heading text-sm font-bold text-strong"
              >
                {module.number}
              </span>
              <StatusBadge>{module.status}</StatusBadge>
            </div>

            <h3 className="mb-3 font-heading text-base font-bold leading-snug text-navy md:text-lg">
              {module.title}
            </h3>

            <p className="mb-6 leading-relaxed text-navy/75">
              {module.manages}
            </p>

            <div className="mt-auto pt-6 border-t border-navy/5">
              <dl className="grid gap-2 text-sm leading-relaxed">
                {module.operations.map((op) => (
                  <div key={op} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      strokeWidth={2.4}
                      className="mt-0.5 shrink-0 text-[var(--brand)]"
                      aria-hidden="true"
                    />
                    <dt className="font-medium text-navy">{op}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}