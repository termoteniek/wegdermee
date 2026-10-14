import { useChristmasPause } from './useChristmasPause'

export function WordmarkStar({ className = '' }: { className?: string }) {
  useChristmasPause()

  return (
    <svg viewBox="0 0 24 24" className={`wordmark-star ${className}`} aria-hidden>
      <path
        fill="currentColor"
        d="M12 1.2 14.5 8.1h7.2l-5.8 4.3 2.2 6.9L12 15.2 6 19.3l2.2-6.9L2.3 8.1h7.2z"
      />
    </svg>
  )
}
