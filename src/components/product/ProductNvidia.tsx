import { Check } from 'lucide-react'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { Reveal } from '../ui/Reveal'

const nvidiaDefs = [
  {
    name: 'NVIDIA Merlin',
    badge: 'Proposed',
    description:
      'Open-source recommender system framework (NVTabular, HugeCTR, Merlin Systems) evaluated for future feature engineering, candidate retrieval, and personalized product ranking pipelines.',
    chips: ['NVTabular', 'HugeCTR', 'Merlin Systems'],
  },
  {
    name: 'NVIDIA NeMo',
    badge: 'Proposed',
    description:
      'End-to-end model development and customization framework evaluated for adapting conversational AI models to e-commerce product discovery terminology and intent extraction.',
    chips: ['Intent extraction', 'Conversational AI'],
  },
  {
    name: 'NVIDIA NIM',
    badge: 'Proposed',
    description:
      'Standardized, containerized inference microservices exposing OpenAI-compatible REST endpoints, evaluated for deploying compatible conversational and embedding models cleanly behind Laravel APIs.',
    chips: ['REST endpoints', 'Containerized inference'],
  },
  {
    name: 'NVIDIA Triton Inference Server',
    badge: 'Proposed',
    description:
      'Multi-framework model serving platform evaluated for orchestrating concurrent inference workloads with dynamic batching across recommendation and conversational models.',
    chips: ['Model serving', 'Dynamic batching'],
  },
  {
    name: 'NVIDIA RAPIDS',
    badge: 'Proposed',
    description:
      'GPU-accelerated CUDA-X data science libraries (cuDF, cuML) evaluated for accelerating large-scale historical interaction analytics, customer preference clustering, and catalogue trend processing.',
    chips: ['cuDF', 'cuML'],
  },
]

export function ProductNvidia() {
  return (
    <SectionShell id="nvidia-foundation" surface="white">
      <div aria-hidden="true" className="section-blobs opacity-50" />
      <Reveal>
        <SectionTitle dark="Technology Foundation" accent="Proposed NVIDIA Roadmap" />
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted text-center md:text-lg">
          These NVIDIA technologies are under evaluation as future architecture
          options only. They are not active, deployed, or integrated into the
          current release.
        </p>
      </Reveal>

      <div className="relative mt-14 grid gap-6 md:gap-8 lg:grid-cols-2 xl:gap-10">
        {nvidiaDefs.map((card) => (
          <article
            key={card.name}
            className="relative flex flex-col rounded-[26px] border border-[var(--border)] bg-white p-7 shadow-card transition-transform hover:-translate-y-1 hover:border-[var(--brand)]/40 md:p-8"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="font-heading text-lg font-bold text-navy md:text-xl">{card.name}</h3>
              <span className="inline-flex items-center rounded-full border border-[var(--brand)]/25 bg-[var(--brand-tint)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--brand)]">
                {card.badge}
              </span>
            </div>
            <p className="mb-6 leading-relaxed text-navy/75">
              {card.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 border-t border-navy/5 pt-5">
              {card.chips.map((chip) => (
                <span key={chip} className="inline-flex items-center gap-1.5 rounded-full bg-pale px-3 py-1 text-xs font-semibold text-navy">
                  <Check size={13} strokeWidth={2.6} className="text-[var(--brand)]" aria-hidden="true" />
                  {chip}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
