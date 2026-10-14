import { useEffect } from 'react'

let listeners = 0

function syncPause() {
  document.documentElement.toggleAttribute('data-christmas-paused', document.hidden)
}

export function useChristmasPause() {
  useEffect(() => {
    if (listeners === 0) {
      syncPause()
      document.addEventListener('visibilitychange', syncPause)
    }
    listeners += 1

    return () => {
      listeners -= 1
      if (listeners === 0) {
        document.removeEventListener('visibilitychange', syncPause)
        document.documentElement.removeAttribute('data-christmas-paused')
      }
    }
  }, [])
}
