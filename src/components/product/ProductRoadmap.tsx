import { Rocket } from 'lucide-react'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { Reveal } from '../ui/Reveal'

const roadmapDefs = [
  {
    number: '01',
    title: 'Core Laravel & SQL Foundation',
    description:
      'Establish relational schemas and CRUD workflows for products, categories, customer profiles, recommendation requests, and conversation histories.',
  },
  {
    number: '02',
    title: 'Role-Based Access & Operational Dashboard',
    description:
      'Enforce role permissions across Administrator, Store Manager, Catalogue Manager, and Support Agent accounts alongside operational dashboard reporting.',
  },
  {
    number: '03',
    title: 'Conversational Intake & Preference Enrichment',
    description:
      'Expand structured preference capture and enquiry tagging workflows to link multi-turn customer conversations directly to recommendation records.',
  },
  {
    number: '04',
    title: 'Decoupled Inference API Boundary (NVIDIA NIM & Triton Evaluation)',
    description:
      'Define stateless REST service contracts between Laravel and containerized inference endpoints for future model-assisted product matching.',
  },
  {
    number: '05',
    title: 'Recommender & Conversational Model Prototyping (NVIDIA Merlin & NeMo)',
    description:
      'Evaluate domain-adapted conversational intent models and catalogue recommender pipelines against seeded product and preference datasets.',
  },
  {
    number: '06',
    title: 'Accelerated Interaction Analytics (NVIDIA RAPIDS)',
    description:
      'Assess GPU-accelerated tabular analytics workflows for high-volume catalogue engagement, category affinity, and customer interaction trends.',
  },
]

export function ProductRoadmap() {
  return (
    <SectionShell id="roadmap-advanced-technology" surface="white">
      <Reveal>
        <SectionTitle dark="Advanced Technology Roadmap" accent="Q3–Q4 Plan" />
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted text-center md:text-lg">
          Planned milestones and development stages for Demerlo's future
          technical roadmap.
        </p>
      </Reveal>

      <div className="relative mt-14 grid gap-6 md:gap-8 lg:grid-cols-2 xl:gap-10">
        {roadmapDefs.map((card) => (
          <article
            key={card.number}
            className="relative flex flex-col rounded-[26px] border border-white/10 bg-black p-7 shadow-card md:p-8"
          >
            <div className="mb-4 flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-heading text-lg font-bold text-black">
                {card.number}
              </span>
              <span className="inline-flex items-center rounded-full border border-black/30 bg-black/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-black">
                Planned
              </span>
            </div>
            <h3 className="mb-2 font-heading text-lg font-bold leading-snug text-white">
              {card.title}
            </h3>
            <p className="leading-relaxed text-white/60">{card.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-2 text-xs text-navy/60 md:text-sm">
        <Rocket size={14} className="text-black" aria-hidden="true" />
        <span>Future-stage plans only — no live inference integrations in the current release.</span>
      </div>
    </SectionShell>
  )
}