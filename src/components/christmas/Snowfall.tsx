import type { CSSProperties } from 'react'
import { useChristmasPause } from './useChristmasPause'

const FLAKES = Array.from({ length: 24 }, (_, i) => ({
  left: `${2 + i * 4}%`,
  delay: `${-((i * 1.7) % 20)}s`,
  duration: `${16 + (i % 8) * 1.5}s`,
  size: 10 + (i % 4) * 3,
  drift: `${(i % 2 === 0 ? 1 : -1) * (12 + (i % 5) * 7)}px`,
  opacity: (0.35 + (i % 5) * 0.1).toFixed(2),
  spin: `${10 + (i % 6) * 2}s`,
  shape: i % 2,
}))

function FlakeShape({ shape }: { shape: number }) {
  if (shape === 0) {
    return (
      <path
        d="M12 2.5v19M2.5 12h19M6 6l12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    )
  }

  return <path fill="currentColor" d="M12 2.5 14.2 9.8 21.5 12 14.2 14.2 12 21.5 9.8 14.2 2.5 12 9.8 9.8Z" />
}

export function Snowfall({ className = '' }: { className?: string }) {
  useChristmasPause()

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {FLAKES.map((flake, i) => (
        <span
          key={i}
          className="snow-lane"
          style={
            {
              left: flake.left,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
              '--drift': flake.drift,
              '--flake-opacity': flake.opacity,
            } as CSSProperties
          }
        >
          <svg
            viewBox="0 0 24 24"
            width={flake.size}
            height={flake.size}
            className="snowflake"
            style={{ animationDuration: flake.spin }}
          >
            <FlakeShape shape={flake.shape} />
          </svg>
        </span>
      ))}
    </div>
  )
}
