type SwooshProps = {
  className?: string
  flip?: boolean
}

export function Swoosh({ className = '', flip = false }: SwooshProps) {
  return (
    <svg
      className={`pointer-events-none w-full ${flip ? 'rotate-180' : ''} ${className}`}
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 80C240 20 480 100 720 60C960 20 1200 90 1440 40V120H0V80Z"
        fill="currentColor"
      />
      <path
        d="M0 95C200 55 400 110 600 75C800 40 1100 100 1440 65V120H0V95Z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  )
}
