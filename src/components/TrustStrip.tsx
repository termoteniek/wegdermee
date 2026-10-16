const points = [
  {
    title: '7 op 7',
    text: "Flexibel inplanbaar, ook in het weekend en 's avonds.",
  },
  {
    title: 'Vergunningen & verzekering',
    text: 'Alle vergunningen en een uitstekende verzekering.',
  },
  {
    title: "Vier regio's",
    text: 'Oost-Vlaanderen, West-Vlaanderen, Antwerpen en Brussel.',
  },
]

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-surface" aria-label="Waarom klanten ons bellen">
      <ul className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 md:grid-cols-3 md:gap-10 md:py-10">
        {points.map((point) => (
          <li key={point.title}>
            <p className="font-display text-lg font-semibold text-ink">{point.title}</p>
            <p className="mt-1 max-w-sm text-base leading-relaxed text-muted">{point.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
