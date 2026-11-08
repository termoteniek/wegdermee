import { useId, useState, type ChangeEvent } from 'react'
import { PhotoPrepareError, prepareBookingPhotos } from '../../lib/prepareBookingPhoto'
import { MAX_BOOKING_PHOTOS, type BookingPhoto } from '../../types/booking'

const labelClassName =
  'font-display text-xs font-semibold uppercase tracking-wide text-muted'

type PhotoUploadProps = {
  photos: BookingPhoto[]
  onChange: (photos: BookingPhoto[]) => void
}

export function PhotoUpload({ photos, onChange }: PhotoUploadProps) {
  const inputId = useId()
  const hintId = useId()
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const full = photos.length >= MAX_BOOKING_PHOTOS

  async function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = [...(event.target.files ?? [])]
    event.target.value = ''
    if (files.length === 0) return

    setBusy(true)
    setError(null)

    try {
      const result = await prepareBookingPhotos(files, photos.length)
      onChange([...photos, ...result.photos])
      if (result.truncated) {
        setError(`U kunt maximaal ${MAX_BOOKING_PHOTOS} foto's toevoegen.`)
      }
    } catch (caught) {
      setError(
        caught instanceof PhotoPrepareError
          ? caught.message
          : 'Deze foto konden we niet verwerken. Probeer een andere.',
      )
    } finally {
      setBusy(false)
    }
  }

  function removePhoto(index: number) {
    onChange(photos.filter((_, photoIndex) => photoIndex !== index))
    setError(null)
  }

  return (
    <div>
      <p className={labelClassName}>
        Foto's <span className="font-sans text-[11px] font-normal normal-case tracking-normal">(optioneel)</span>
      </p>
      <p id={hintId} className="mt-1 text-sm leading-relaxed text-muted">
        Tot {MAX_BOOKING_PHOTOS} foto's van wat weg moet, zodat we vooraf een beeld hebben.
      </p>

      {photos.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-3">
          {photos.map((photo, index) => (
            <li key={`${photo.name}-${index}`} className="relative">
              <img
                src={`data:image/jpeg;base64,${photo.data}`}
                alt={photo.name}
                className="size-20 object-cover"
              />
              <button
                type="button"
                onClick={() => removePhoto(index)}
                className="absolute top-1 right-1 flex size-6 items-center justify-center bg-ink text-sm leading-none text-white hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={`Verwijder ${photo.name}`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3">
        <input
          id={inputId}
          type="file"
          accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
          multiple
          disabled={busy || full}
          onChange={handleFiles}
          aria-describedby={hintId}
          className="sr-only"
        />
        <label
          htmlFor={inputId}
          className={`flex w-full justify-center border-2 border-ink px-4 py-2 font-display text-sm font-bold uppercase tracking-wide ${
            busy || full
              ? 'pointer-events-none cursor-not-allowed opacity-50'
              : 'cursor-pointer transition-colors hover:bg-ink hover:text-cream'
          }`}
        >
          {busy ? 'Bezig…' : full ? 'Maximum bereikt' : "Foto's toevoegen"}
        </label>
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
