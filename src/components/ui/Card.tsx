import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type CardVariant = 'white' | 'soft' | 'dark' | 'pale'

type CardProps = {
  variant?: CardVariant
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  className?: string
  children?: ReactNode
}

const variants: Record<CardVariant, string> = {
  white: 'bg-white text-navy',
  soft: 'bg-soft text-navy',
  dark: 'bg-dark text-white',
  pale: 'bg-pale text-navy',
}

const paddings = {
  sm: 'p-4',
  md: 'p-5 md:p-6',
  lg: 'p-6 md:p-8',
}

export function Card({
  variant = 'white',
  hover = true,
  padding = 'md',
  className = '',
  children,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={[
        'relative rounded-card shadow-card',
        hover ? 'hover:shadow-lift' : '',
        variants[variant],
        paddings[padding],
        className,
      ].join(' ')}
    >
      {children}
    </motion.div>
  )
}
