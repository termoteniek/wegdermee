import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      let frame = 0

      const scrollToTarget = () => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }

      frame = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(scrollToTarget)
      })

      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
