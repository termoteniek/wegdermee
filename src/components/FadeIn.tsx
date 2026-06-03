import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

const slideVariants: Variants = {
  hidden: { opacity: 0, x: -48, rotate: -2 },
  visible: { opacity: 1, x: 0, rotate: 0 },
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
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        type: 'spring',
        stiffness: 280,
        damping: 22,
        delay,
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
