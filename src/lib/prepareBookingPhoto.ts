import { MAX_BOOKING_PHOTOS, type BookingPhoto } from '../types/booking'

const MAX_EDGE = 1600
const MAX_PHOTO_BYTES = 900 * 1024
const ACCEPTED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])

export class PhotoPrepareError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'PhotoPrepareError'
  }
}

function blobToBase64(blob: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = String(reader.result || '')
      const comma = result.indexOf(',')
      resolve(comma >= 0 ? result.slice(comma + 1) : result)
    }
    reader.onerror = () => reject(new PhotoPrepareError('Deze foto konden we niet verwerken. Probeer een andere.'))
    reader.readAsDataURL(blob)
  })
}

function canvasToJpeg(canvas: HTMLCanvasElement, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new PhotoPrepareError('Deze foto konden we niet verwerken. Probeer een andere.'))
          return
        }
        resolve(blob)
      },
      'image/jpeg',
      quality,
    )
  })
}

function drawScaled(source: CanvasImageSource, width: number, height: number, scale: number) {
  const canvas = document.createElement('canvas')
  canvas.width = Math.max(1, Math.round(width * scale))
  canvas.height = Math.max(1, Math.round(height * scale))
  const context = canvas.getContext('2d')
  if (!context) {
    throw new PhotoPrepareError('Deze foto konden we niet verwerken. Probeer een andere.')
  }
  context.drawImage(source, 0, 0, canvas.width, canvas.height)
  return canvas
}

function photoName(fileName: string, index: number) {
  const base = fileName
    .replace(/\.[^.]+$/, '')
    .replace(/[^A-Za-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)
  return `${base || `foto-${index + 1}`}.jpg`
}

export async function prepareBookingPhoto(file: File, index: number): Promise<BookingPhoto> {
  if (!ACCEPTED_TYPES.has(file.type)) {
    throw new PhotoPrepareError('Gebruik een JPG, PNG of WebP.')
  }

  let source: ImageBitmap
  try {
    source = await createImageBitmap(file)
  } catch {
    throw new PhotoPrepareError('Deze foto konden we niet verwerken. Probeer een JPG of PNG.')
  }

  try {
    const scale = Math.min(1, MAX_EDGE / Math.max(source.width, source.height))
    let canvas = drawScaled(source, source.width, source.height, scale)
    let quality = 0.72
    let blob = await canvasToJpeg(canvas, quality)

    while (blob.size > MAX_PHOTO_BYTES && quality > 0.45) {
      quality -= 0.12
      blob = await canvasToJpeg(canvas, quality)
    }

    while (blob.size > MAX_PHOTO_BYTES && canvas.width > 800) {
      canvas = drawScaled(canvas, canvas.width, canvas.height, 0.75)
      blob = await canvasToJpeg(canvas, 0.6)
    }

    if (blob.size > MAX_PHOTO_BYTES) {
      throw new PhotoPrepareError('Deze foto is te groot. Kies een kleinere foto.')
    }

    return {
      name: photoName(file.name, index),
      type: 'image/jpeg',
      data: await blobToBase64(blob),
    }
  } finally {
    source.close()
  }
}

export async function prepareBookingPhotos(files: File[], existingCount: number) {
  const room = MAX_BOOKING_PHOTOS - existingCount
  if (room <= 0) {
    throw new PhotoPrepareError(`U kunt maximaal ${MAX_BOOKING_PHOTOS} foto's toevoegen.`)
  }

  const selected = files.slice(0, room)
  const photos: BookingPhoto[] = []

  for (const file of selected) {
    photos.push(await prepareBookingPhoto(file, existingCount + photos.length))
  }

  return {
    photos,
    truncated: files.length > room,
  }
}
