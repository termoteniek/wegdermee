import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

/** Curated frames from `media/New Images` — crew, truck, loading, cleanup. */
const ids = [
  '003',
  '006',
  '012',
  '013',
  '016',
  '020',
  '024',
  '028',
  '031',
  '040',
  '044',
  '049',
  '050',
  '052',
  '064',
  '070',
  '076',
  '080',
  '081',
  '084',
  '085',
  '086',
  '087',
  '088',
]

const widths = [640, 1080, 1920]
const sourceDir = path.resolve('media/New Images')
const outDir = path.resolve('public/Werk')

await mkdir(outDir, { recursive: true })

for (const id of ids) {
  const input = path.join(sourceDir, `${id}.jpg`)
  for (const width of widths) {
    const output = path.join(outDir, `${id}-${width}.webp`)
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true, fit: 'inside' })
      .webp({ quality: 76, effort: 4 })
      .toFile(output)
  }
  console.log(id)
}

console.log(`wrote ${ids.length * widths.length} files to public/Werk`)
