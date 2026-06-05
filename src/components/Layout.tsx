import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:uppercase focus:text-white"
      >
        Ga direct naar de hoofdinhoud
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
