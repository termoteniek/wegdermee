export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-12 sm:flex-row sm:px-8">
        <img src="/logo.png" alt="wegdermee" className="h-14 w-auto brightness-0 invert" />
        <p className="text-center font-medium text-white/60 sm:text-left">
          © {year} wegdermee — Jong team, grote bakwagens
        </p>
        <nav className="flex gap-6" aria-label="Footer">
          <a
            href="#"
            className="font-display text-sm uppercase text-lime transition-colors hover:text-accent"
          >
            Privacy
          </a>
          <a
            href="#"
            className="font-display text-sm uppercase text-lime transition-colors hover:text-accent"
          >
            Voorwaarden
          </a>
        </nav>
      </div>
    </footer>
  )
}
