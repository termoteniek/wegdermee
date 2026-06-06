import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToHash } from './ScrollToHash'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToHash />
      <Header />
      <main id="main" className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </div>
  )
}
