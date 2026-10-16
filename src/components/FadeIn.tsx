import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

const slideVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
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
  const reduce = useReducedMotion()
  const classes = `block w-full min-w-0 ${className ?? ''}`

  if (reduce) {
    return <div className={classes}>{children}</div>
  }

  return (
    <motion.div
      className={classes}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={direction === 'left' ? slideVariants : defaultVariants}
    >
      {children}
    </motion.div>
  )
}
