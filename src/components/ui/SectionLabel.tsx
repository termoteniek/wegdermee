import { Sticker } from './Sticker'

type SectionLabelProps = {
  children: string
  variant?: 'lime' | 'orange' | 'pink'
}

export function SectionLabel({ children, variant = 'orange' }: SectionLabelProps) {
  return (
    <Sticker variant={variant} rotate={-4} className="!text-sm sm:!text-base">
      {children}
    </Sticker>
  )
}
