import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const slideVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left'
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const variants = direction === 'left' ? slideVariants : defaultVariants

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
