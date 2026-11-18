import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type CommonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<NonNullable<CommonProps['variant']>, string> = {
  primary:
    'bg-strong text-white hover:bg-[#2569a8] shadow-sm border border-transparent',
  secondary:
    'bg-white/90 text-navy hover:bg-white border border-white/70 backdrop-blur-sm',
  outline:
    'bg-transparent text-navy border border-navy/20 hover:border-strong hover:text-strong',
  ghost: 'bg-transparent text-navy/80 hover:text-strong border border-transparent',
  dark: 'bg-dark text-white hover:bg-navy border border-transparent',
}

const sizes: Record<NonNullable<CommonProps['size']>, string> = {
  sm: 'px-3.5 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-strong disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  ].join(' ')

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
