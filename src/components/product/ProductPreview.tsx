import { useState } from 'react'
import { Eye } from 'lucide-react'
import { preview, site } from '../../data/content'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { Reveal } from '../ui/Reveal'

type PreviewTab =
  | 'overview'
  | 'registry'
  | 'conversations'

const tabs: Array<{ id: PreviewTab; label: string }> = [
  { id: 'overview', label: 'Performance Overview' },
  { id: 'registry', label: 'Recommendation Registry' },
  { id: 'conversations', label: 'Conversation History' },
]

const statusColors: Record<string, string> = {
  New: '#F59E0B',
  'In Review': '#3760F9',
  Recommended: '#2A4DD4',
  Closed: '#7CB9E8',
}

export function ProductPreview() {
  const [tab, setTab] = useState<PreviewTab>('overview')

  return (
    <SectionShell id="application-preview" surface="white">
      <div aria-hidden="true" className="section-blobs opacity-50" />
      <Reveal>
        <SectionTitle dark="Interactive Application Preview" accent="Operational Workspace" />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="overflow-hidden rounded-card border border-[var(--border)] bg-[var(--soft-grey)] shadow-lift">
          <div className="flex flex-wrap items-center gap-3 border-b border-navy/10 bg-white px-4 py-3 md:px-5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#F28B82]" />
              <span className="h-3 w-3 rounded-full bg-[#FBD36B]" />
              <span className="h-3 w-3 rounded-full bg-[#7CCB92]" />
            </div>
            <div className="min-w-0 flex-1 truncate rounded-full bg-page px-4 py-1.5 text-center text-xs text-muted sm:block">
              {site.appUrl.replace(/^https?:\/\//, '')}
            </div>
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-navy">
              Illustrative Sample Data — No Live Backend Connection
            </span>
          </div>

          <div className="space-y-5 p-4 md:p-6">
            <div role="group" aria-label="Workspace view switcher" className="flex flex-wrap gap-2">
              {tabs.map((t) => {
                const isActive = tab === t.id
                return (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setTab(t.id)}
                    className={[
                      'inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]',
                      isActive
                        ? 'border-[var(--brand)] bg-[var(--brand)] text-white'
                        : 'border-[var(--border)] bg-white text-navy hover:border-[var(--brand)]/50',
                    ].join(' ')}
                  >
                    {t.label}
                  </button>
                )
              })}
            </div>

            {tab === 'overview' && (
              <div>
                <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-4">
                  {preview.stats.map((stat) => (
                    <div key={stat.label} className="card-on-soft card-accent rounded-card p-4">
                      <dt className="text-xs font-medium text-muted">{stat.label}</dt>
                      <dd className="mt-1.5 font-heading text-2xl font-extrabold text-navy md:text-3xl">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 grid gap-4 md:gap-5 lg:grid-cols-2">
                  <div className="card-on-soft card-accent rounded-card p-4 md:p-5">
                    <h3 className="font-heading text-sm font-bold text-navy">Category Distribution</h3>
                    <div
                      role="img"
                      aria-label={`Donut chart of sample category distribution: ${preview.categoryDistribution.map((c) => `${c.name} ${c.value}%`).join(', ')}`}
                      className="mt-3 grid h-52 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1fr)]
                    "
                    >
                      {/* Static placeholder visual */}
                      <div className="relative h-40 w-full max-w-40" aria-hidden="true">
                        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                          <circle cx="60" cy="60" r="46" fill="none" stroke="#E6E7EC" strokeWidth="16" />
                          {preview.categoryDistribution.map((c) => {
                            const dash = `${(c.value / 100) * 289.03} 289.03`
                            return (
                              <circle
                                key={c.name}
                                cx="60"
                                cy="60"
                                r="46"
                                fill="none"
                                stroke={['#3760F9', '#6B85FB', '#DAD9FB', '#D2FC59', '#2A4DD4'][preview.categoryDistribution.indexOf(c)]}
                                strokeWidth="16"
                                strokeDasharray={dash}
                                strokeDashoffset={0}
                              />
                            )
                          })}
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center font-heading text-xl font-extrabold text-navy">38%</span>
                      </div>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-navy/80 sm:grid-cols-1" aria-label="Category distribution values">
                        {preview.categoryDistribution.map((c) => (
                          <li key={c.name} className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: statusColors[c.name] ?? '#3760F9' }} />
                            <span>{c.name}</span>
                            <span className="ml-auto font-semibold text-navy">{c.value}%</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                      {preview.popularProducts.map((p) => (
                        <div key={p.name} className="flex items-center justify-between rounded-2xl border border-navy/5 bg-white px-4 py-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-navy">{p.name}</p>
                            <p className="text-xs text-muted">{p.category}</p>
                          </div>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy">
                            <Eye size={14} className="text-[var(--brand)]" aria-hidden="true" />
                            {p.views}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tab === 'registry' && (
              <div className="grid gap-4 md:gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
                <div className="card-on-soft card-accent rounded-card p-4 md:p-5">
                  <h3 className="font-heading text-sm font-bold text-navy">Recommendation Requests</h3>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <caption className="sr-only">Recommendation request status breakdown</caption>
                      <thead>
                        <tr className="border-b border-navy/10 text-xs uppercase tracking-wider text-muted">
                          <th scope="col" className="py-2 pr-3 font-semibold">Status</th>
                          <th scope="col" className="py-2 text-right font-semibold">Requests</th>
                        </tr>
                      </thead>
                      <tbody>
                        {preview.requestStatus.map((r) => (
                          <tr key={r.status} className="border-b border-navy/5 last:border-0">
                            <td className="py-2.5 pr-3 font-medium text-navy">{r.status}</td>
                            <td className="py-2.5 text-right font-semibold text-navy">{r.count}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-muted">
                    Curated recommendation outcomes remain linked to structured request contexts.
                  </p>
                </div>

                <div className="rounded-card border border-navy/10 bg-white p-4 shadow-card md:p-5">
                  <h3 className="font-heading text-sm font-bold text-navy">Request lifecycle</h3>
                  <ol className="mt-5 space-y-4">
                    {preview.requestStatus.map((r, i) => (
                      <li key={r.status} className="relative pl-8">
                        <span className="absolute left-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-pale font-heading text-xs font-bold text-[var(--brand)]">
                          {i + 1}
                        </span>
                        <p className="font-semibold text-navy">{r.status}</p>
                        <p className="text-sm text-muted">{r.count} sample requests in current release.</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {tab === 'conversations' && (
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
                <div className="rounded-card border border-navy/10 bg-white p-5 shadow-card md:p-6">
                  <h3 className="font-heading text-sm font-bold text-navy">Recent Chatbot Activity</h3>
                  <ul className="mt-4 divide-y divide-navy/5">
                    {preview.recentActivity.map((a) => (
                      <li key={a.customer} className="flex items-start gap-3 py-3 first:pt-0">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pale text-sm font-bold text-[var(--brand)]">
                          {a.customer.charAt(0)}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-navy">{a.customer}</p>
                          <p className="truncate text-sm text-muted">{a.message}</p>
                        </div>
                        <span className="shrink-0 text-xs text-muted">{a.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-card border border-navy/10 bg-white p-5 shadow-card md:p-6">
                  <h3 className="font-heading text-sm font-bold text-navy">Enquiry patterns</h3>
                  <ul className="mt-4 space-y-3 text-sm text-navy/80">
                    <li className="rounded-2xl bg-pale p-3 text-navy/85">
                      Preference capture occurs through structured recommendation criteria.
                    </li>
                    <li className="rounded-2xl bg-pale p-3 text-navy/85">
                      Conversation histories support follow-up context retrieval.
                    </li>
                    <li className="rounded-2xl bg-pale p-3 text-navy/85">
                      Repeated enquiries are addressed through historical linkage.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <p className="text-center text-xs text-muted">
              All figures, names, and interactions shown are illustrative sample data for design preview only.
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  )
}
