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
      <ScrollToHash />
      <Header lightHeader={lightHeader} />
      <main id="main" className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </div>
  )
}
