export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-12 sm:flex-row sm:px-8">
        <img src="/logo.png" alt="wegdermee" className="h-12 w-auto" />
        <p className="text-center text-sm text-muted sm:text-left">
          © {year} wegdermee — Inboedels & rommelophaal
        </p>
        <nav className="flex gap-8" aria-label="Footer">
          <a
            href="#"
            className="font-display text-sm font-semibold uppercase tracking-widest text-muted transition-colors hover:text-ink"
          >
            Privacy
          </a>
          <a
            href="#"
            className="font-display text-sm font-semibold uppercase tracking-widest text-muted transition-colors hover:text-ink"
          >
            Voorwaarden
          </a>
        </nav>
      </div>
    </footer>
  )
}
