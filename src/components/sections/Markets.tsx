import { useState } from 'react'
import { Boxes, Cpu, Globe, ShoppingCart, Store, LucideIcon } from 'lucide-react'
import { markets } from '../../data/content'
import { SectionShell } from '../ui/SectionShell'
import { SectionTitle } from '../ui/SectionTitle'
import { GlassCard } from '../ui/GlassCard'
import { IconBadge } from '../ui/IconBadge'
import { PillTag } from '../ui/PillTag'
import { Toggle } from '../ui/Toggle'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

const builtForIcons: LucideIcon[] = [Store, ShoppingCart, Globe, Boxes, Cpu]

/** Decorative dotted world map (abstract continents filled with a dot pattern). */
function DottedMap() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 200 100"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-25"
    >
      <defs>
        <pattern id="markets-dots" width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.8" fill="#fff" />
        </pattern>
      </defs>
      <g fill="url(#markets-dots)">
        <path d="M20 18 L50 12 L62 22 L58 38 L46 48 L36 44 L26 32 Z" />
        <path d="M44 54 L56 54 L60 68 L52 88 L46 80 Z" />
        <path d="M88 20 L108 18 L112 30 L108 44 L112 62 L102 78 L92 62 L90 40 L84 30 Z" />
        <path d="M112 16 L160 14 L176 30 L164 46 L146 48 L132 40 L116 34 Z" />
        <path d="M154 68 L176 66 L180 80 L160 82 Z" />
      </g>
    </svg>
  )
}

function TeamCard({ title, roles }: { title: string; roles: string[] }) {
  const [open, setOpen] = useState(true)
  const listId = `team-${title.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <Card variant="white" padding="lg" hover={false}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-navy">{title}</h3>
          <PillTag className="mt-2">View roles</PillTag>
        </div>
        <Toggle
          checked={open}
          onChange={setOpen}
          label={`${open ? 'Hide' : 'Show'} roles for ${title}`}
          variant="light"
        />
      </div>
      <ul
        id={listId}
        hidden={!open}
        className="mt-5 space-y-2.5 border-t border-navy/10 pt-5"
      >
        {roles.map((role) => (
          <li key={role} className="flex items-center gap-3 text-sm text-navy/85">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-strong"
            />
            {role}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export function Markets() {
  return (
    <SectionShell id="markets" panelClassName="relative isolate overflow-hidden bg-blue-panel">
      <DottedMap />

      <Reveal>
        <SectionTitle
          dark={markets.titleDark}
          accent={markets.titleAccent}
          invert
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <GlassCard padding="lg" className="h-full">
            <h3 className="font-heading text-lg font-bold text-navy">
              Built for
            </h3>
            <ul className="mt-5 space-y-3">
              {markets.builtFor.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/60 px-3 py-2.5"
                >
                  <IconBadge icon={builtForIcons[i % builtForIcons.length]} size="sm" />
                  <span className="text-sm font-medium text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <div className="flex flex-col gap-6">
          {markets.teams.map((team, i) => (
            <Reveal key={team.title} delay={0.1 * (i + 1)}>
              <TeamCard title={team.title} roles={team.roles} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
