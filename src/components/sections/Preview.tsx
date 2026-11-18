import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { preview, site } from '../../data/content'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { PillTag } from '../ui/PillTag'
import { Reveal } from '../ui/Reveal'

const PIE_COLORS = ['#2F80C9', '#7DB9E8', '#CFE6F7', '#5BA3D9', '#1F6FB8']

function Panel({
  title,
  children,
  className = '',
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      aria-label={title}
      className={['rounded-card border border-navy/10 bg-white p-4 shadow-card md:p-5', className].join(' ')}
    >
      <h3 className="font-heading text-sm font-bold text-navy">{title}</h3>
      {children}
    </section>
  )
}

export function Preview() {
  const appHost = site.appUrl.replace(/^https?:\/\//, '')

  return (
    <SectionShell id="preview">
      <Reveal>
        <SectionTitle dark={preview.titleDark} accent={preview.titleAccent} />
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div className="overflow-hidden rounded-card border border-navy/10 bg-page-light shadow-lift">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-navy/10 bg-white px-4 py-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#F28B82]" />
              <span className="h-3 w-3 rounded-full bg-[#FBD36B]" />
              <span className="h-3 w-3 rounded-full bg-[#7CCB92]" />
            </div>
            <div className="hidden min-w-0 flex-1 truncate rounded-full bg-page px-4 py-1.5 text-center text-xs text-muted sm:block">
              {appHost}
            </div>
            <PillTag variant="strong" className="ml-auto sm:ml-0">
              {preview.sampleLabel}
            </PillTag>
          </div>

          <div className="space-y-4 p-4 md:space-y-5 md:p-6">
            {/* Stats */}
            <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-4">
              {preview.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-card border border-navy/10 bg-white p-4 shadow-card"
                >
                  <dt className="text-xs font-medium text-muted">{stat.label}</dt>
                  <dd className="mt-1.5 font-heading text-2xl font-extrabold text-navy md:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Charts */}
            <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
              <Panel title="Category distribution">
                <div className="mt-3 grid items-center gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
                  <div
                    role="img"
                    aria-label={`Donut chart of sample category distribution: ${preview.categoryDistribution
                      .map((c) => `${c.name} ${c.value}%`)
                      .join(', ')}`}
                    className="h-52 w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={preview.categoryDistribution}
                          dataKey="value"
                          nameKey="name"
                          innerRadius="58%"
                          outerRadius="90%"
                          paddingAngle={2}
                          stroke="none"
                        >
                          {preview.categoryDistribution.map((entry, i) => (
                            <Cell key={entry.name} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(v: number) => [`${v}%`, 'Share']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
                    {preview.categoryDistribution.map((c, i) => (
                      <li key={c.name} className="flex items-center gap-2 text-xs text-navy/80">
                        <span
                          aria-hidden="true"
                          className="h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }}
                        />
                        <span>{c.name}</span>
                        <span className="ml-auto font-semibold text-navy">{c.value}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Panel>

              <Panel title="Request status">
                <div
                  role="img"
                  aria-label={`Bar chart of sample request status: ${preview.requestStatus
                    .map((r) => `${r.status} ${r.count}`)
                    .join(', ')}`}
                  className="mt-3 h-52 w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={preview.requestStatus}
                      margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E3E8EE" />
                      <XAxis
                        dataKey="status"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12, fill: '#6B7785' }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12, fill: '#6B7785' }}
                      />
                      <Tooltip
                        cursor={{ fill: 'rgba(125,185,232,0.15)' }}
                        formatter={(v: number) => [v, 'Requests']}
                      />
                      <Bar dataKey="count" fill="#2F80C9" radius={[6, 6, 0, 0]} maxBarSize={44} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Panel>
            </div>

            {/* Table + activity */}
            <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
              <Panel title="Popular products">
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <caption className="sr-only">Popular products (sample data)</caption>
                    <thead>
                      <tr className="border-b border-navy/10 text-xs uppercase tracking-wider text-muted">
                        <th scope="col" className="py-2 pr-3 font-semibold">Product</th>
                        <th scope="col" className="py-2 pr-3 font-semibold">Category</th>
                        <th scope="col" className="py-2 text-right font-semibold">Views</th>
                      </tr>
                    </thead>
                    <tbody>
                      {preview.popularProducts.map((p) => (
                        <tr key={p.name} className="border-b border-navy/5 last:border-0">
                          <th scope="row" className="py-2.5 pr-3 font-medium text-navy">
                            {p.name}
                          </th>
                          <td className="py-2.5 pr-3 text-navy/70">{p.category}</td>
                          <td className="py-2.5 text-right font-semibold text-navy">
                            {p.views}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Panel>

              <Panel title="Recent chatbot activity">
                <ul className="mt-3 divide-y divide-navy/5">
                  {preview.recentActivity.map((a) => (
                    <li key={a.customer} className="flex items-start gap-3 py-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pale text-xs font-bold text-strong"
                      >
                        {a.customer.charAt(0)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-navy">{a.customer}</p>
                        <p className="truncate text-xs text-muted">{a.message}</p>
                      </div>
                      <span className="shrink-0 text-xs text-muted">{a.time}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>

            <p className="text-center text-xs text-muted">
              All names, figures and charts shown are {preview.sampleLabel.toLowerCase()} for illustration only.
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  )
}
