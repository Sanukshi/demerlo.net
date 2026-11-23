import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { SectionShell } from '../ui/SectionShell'
import { Reveal } from '../ui/Reveal'

interface ProductCtaProps {
  appUrl: string
}

export function ProductCta({ appUrl }: ProductCtaProps) {
  return (
    <SectionShell id="product-cta" bare>
      <div className="surface-tint relative isolate overflow-hidden rounded-panel px-6 py-14 shadow-panel md:px-12 md:py-16 lg:px-16">
        <div aria-hidden="true" className="section-blobs" />

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-4xl lg:text-5xl">
              Centralize Your Product Discovery and Recommendation Workflows.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={appUrl}
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--brand)] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
              >
                Open Application
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white px-7 py-4 text-sm font-semibold text-navy transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pale text-[var(--brand)]">
                  <ArrowLeft size={16} aria-hidden="true" />
                </span>
                Return to Overview
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  )
}