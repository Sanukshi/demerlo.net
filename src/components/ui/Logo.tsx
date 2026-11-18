import { images } from '../../assets/images'

type LogoProps = {
  className?: string
  inverted?: boolean
  href?: string | false
}

function LogoMark({ inverted = false }: { inverted?: boolean }) {
  if (inverted) {
    return (
      <span className="inline-flex items-center gap-2 text-white">
        <img src={images.mark} alt="" className="h-9 w-9" />
        <span className="font-heading text-[13px] font-extrabold leading-none tracking-[0.12em]">
          DEMERLO
        </span>
      </span>
    )
  }

  return (
    <span className="relative inline-block h-10 w-[132px] overflow-hidden" aria-hidden="true">
      <img
        src={images.logo}
        alt=""
        className="absolute max-w-none"
        style={{ width: '157%', left: '-24%', top: '-72%' }}
      />
    </span>
  )
}

export function Logo({ className = '', inverted = false, href = '#about' }: LogoProps) {
  const mark = <LogoMark inverted={inverted} />

  if (!href) return <span className={className}>{mark}</span>

  return (
    <a href={href} className={className} aria-label="Demerlo home">
      {mark}
    </a>
  )
}
