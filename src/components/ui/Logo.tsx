import { images } from '../../assets/images'

type LogoProps = {
  className?: string
  inverted?: boolean
  href?: string | false
}

function LogoMark({ inverted = false }: { inverted?: boolean }) {
  if (inverted) {
    return (
      <span className="inline-flex items-center gap-2.5 text-white">
        <img src={images.mark} alt="" className="h-11 w-11 object-contain" />
        <span className="font-heading text-[15px] font-extrabold leading-none tracking-[0.12em]">
          DEMERLO
        </span>
      </span>
    )
  }

  return (
    <img
      src={images.logoMark}
      alt=""
      className="h-11 w-auto max-w-[190px] object-contain object-left md:h-12 md:max-w-[210px]"
    />
  )
}

export function Logo({ className = '', inverted = false, href = '#about' }: LogoProps) {
  const mark = <LogoMark inverted={inverted} />

  if (!href) return <span className={className}>{mark}</span>

  return (
    <a href={href} className={['inline-flex items-center', className].join(' ')} aria-label="Demerlo home">
      {mark}
    </a>
  )
}
