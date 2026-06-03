import { Marquee } from './ui/Marquee'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-[3px] border-ink bg-paper">
      <div className="border-b-[3px] border-ink bg-ink py-4">
        <Marquee
          items={['wegdermee', 'Inboedels & rommelophaal', 'België', 'Boek ophaling →']}
          className="text-punch"
          speed="fast"
        />
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-5 py-12 sm:flex-row sm:px-8">
        <a href="#" className="flex items-center gap-4">
          <img src="/logo.png" alt="wegdermee" className="h-12 w-auto" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            © {year}
          </span>
        </a>
        <p className="text-center font-mono text-xs text-muted sm:text-left">
          wegdermee — Inboedels & rommelophaal
        </p>
        <nav className="flex gap-6" aria-label="Footer">
          <a
            href="#"
            className="font-mono text-xs font-bold uppercase tracking-widest text-muted transition-colors hover:text-heat"
          >
            Privacy
          </a>
          <a
            href="#"
            className="font-mono text-xs font-bold uppercase tracking-widest text-muted transition-colors hover:text-heat"
          >
            Voorwaarden
          </a>
        </nav>
      </div>
    </footer>
  )
}
