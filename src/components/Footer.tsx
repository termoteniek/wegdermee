export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="wegdermee" className="h-10 w-auto" />
            <span className="font-serif text-lg font-bold text-navy">wegdermee</span>
          </div>
          <p className="text-center text-sm text-muted sm:text-left">
            © {year} wegdermee — Inboedels & rommelophaal
          </p>
          <nav className="flex gap-6" aria-label="Footer">
            <a
              href="#"
              className="text-sm font-medium text-muted transition-colors hover:text-navy"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted transition-colors hover:text-navy"
            >
              Voorwaarden
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
