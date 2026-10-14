type FairyLightsProps = {
  className?: string
  count?: number
}

function wirePath(count: number) {
  const points = Array.from({ length: count }, (_, i) => {
    const x = ((i + 0.5) / count) * 1200
    const y = i % 2 === 0 ? 12 : 26
    return { x, y }
  })

  let d = `M0 ${points[0].y}`
  points.forEach((point, i) => {
    const prevX = i === 0 ? 0 : points[i - 1].x
    const prevY = i === 0 ? point.y : points[i - 1].y
    const cx = (prevX + point.x) / 2
    const cy = (prevY + point.y) / 2 + 4
    d += ` Q ${cx} ${cy} ${point.x} ${point.y}`
  })
  const last = points[points.length - 1]
  d += ` L 1200 ${last.y}`
  return d
}

export function FairyLights({ className = '', count = 14 }: FairyLightsProps) {
  const bulbs = Array.from({ length: count }, (_, i) => i)

  return (
    <div className={`pointer-events-none relative h-10 w-full ${className}`} aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full text-cream/40"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
      >
        <path
          d={wirePath(count)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {bulbs.map((i) => (
        <span
          key={i}
          className={`christmas-bulb ${i % 2 === 0 ? 'christmas-bulb-accent' : 'christmas-bulb-cream'}`}
          style={{
            left: `${((i + 0.5) / count) * 100}%`,
            top: i % 2 === 0 ? 7 : 21,
            animationDelay: `${(i * 0.31) % 2.8}s`,
          }}
        />
      ))}
    </div>
  )
}
