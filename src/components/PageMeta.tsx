import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageUrl, seoForPath, SITE_URL } from '../lib/site'

const OG_IMAGE = `${SITE_URL}/ImageWithLargeLogo.png`

function upsertMeta(
  selector: string,
  attributes: Record<string, string>,
  createTag: 'meta' | 'link' = 'meta',
) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement(createTag)
    document.head.appendChild(element)
  }

  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value)
  }
}

export function PageMeta() {
  const { pathname } = useLocation()
  const seo = seoForPath(pathname)
  const canonical = pageUrl(seo.path)

  useEffect(() => {
    document.title = seo.title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    })

    upsertMeta('link[rel="canonical"]', { rel: 'canonical', href: canonical }, 'link')

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: 'wegdermee',
    })
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: 'nl_BE',
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonical,
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    })
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: OG_IMAGE,
    })
  }, [canonical, seo.description, seo.title])

  return null
}
