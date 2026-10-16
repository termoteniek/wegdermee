import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToHash } from './ScrollToHash'

type LayoutProps = {
  children: ReactNode
  lightHeader?: boolean
}

export function Layout({ children, lightHeader = false }: LayoutProps) {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Ga naar inhoud
      </a>
      <ScrollToHash />
      <Header lightHeader={lightHeader} />
      <main id="main" className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </div>
  )
}
