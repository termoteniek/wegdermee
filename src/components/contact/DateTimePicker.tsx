import { useMemo, useState } from 'react'
import { getAvailableSlots } from '../../lib/timeSlots'

type DateTimePickerProps = {
  selectedDate: string
  selectedTime: string
  onDateChange: (date: string) => void
  onTimeChange: (time: string) => void
}

const weekdayLabels = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo']
const monthFormatter = new Intl.DateTimeFormat('nl-BE', { month: 'long', year: 'numeric' })
const dateFormatter = new Intl.DateTimeFormat('nl-BE', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

function toDateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function buildMonthDays(viewMonth: Date) {
  const first = startOfMonth(viewMonth)
  const startOffset = (first.getDay() + 6) % 7
  const gridStart = new Date(first)
  gridStart.setDate(first.getDate() - startOffset)

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(gridStart)
    day.setDate(gridStart.getDate() + index)
    return day
  })
}

export function DateTimePicker({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: DateTimePickerProps) {
  const today = useMemo(() => new Date(), [])
  const maxDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + 30)
    return date
  }, [])

  const [viewMonth, setViewMonth] = useState(() => startOfMonth(new Date()))
  const monthDays = useMemo(() => buildMonthDays(viewMonth), [viewMonth])
  const slots = useMemo(
    () => (selectedDate ? getAvailableSlots(selectedDate) : []),
    [selectedDate],
  )

  function isSelectable(date: Date) {
    const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    const maxStart = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())
    return dayStart >= todayStart && dayStart <= maxStart
  }

  function shiftMonth(delta: number) {
    setViewMonth((current) => new Date(current.getFullYear(), current.getMonth() + delta, 1))
  }

  const selectedDateLabel = selectedDate
    ? dateFormatter.format(new Date(`${selectedDate}T12:00:00`))
    : null

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => shiftMonth(-1)}
            className="border-2 border-ink px-3 py-2 font-display text-sm font-bold uppercase tracking-widest transition-colors hover:bg-ink hover:text-cream"
            aria-label="Vorige maand"
          >
            ←
          </button>
          <p className="font-display text-xl font-bold uppercase tracking-wide">
            {monthFormatter.format(viewMonth)}
          </p>
          <button
            type="button"
            onClick={() => shiftMonth(1)}
            className="border-2 border-ink px-3 py-2 font-display text-sm font-bold uppercase tracking-widest transition-colors hover:bg-ink hover:text-cream"
            aria-label="Volgende maand"
          >
            →
          </button>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-2">
          {weekdayLabels.map((label) => (
            <span
              key={label}
              className="py-2 text-center font-display text-xs font-semibold uppercase tracking-widest text-muted"
            >
              {label}
            </span>
          ))}

          {monthDays.map((day) => {
            const key = toDateKey(day)
            const inMonth = day.getMonth() === viewMonth.getMonth()
            const selectable = isSelectable(day)
            const selected = selectedDate === key

            return (
              <button
                key={key}
                type="button"
                disabled={!selectable}
                onClick={() => {
                  onDateChange(key)
                  onTimeChange('')
                }}
                className={`aspect-square border-2 py-2 font-display text-sm font-bold transition-colors ${
                  selected
                    ? 'border-accent bg-accent text-white'
                    : selectable
                      ? 'border-ink/15 bg-cream-dark text-ink hover:border-accent hover:text-accent'
                      : 'cursor-not-allowed border-transparent text-muted-light'
                } ${inMonth ? '' : 'opacity-40'}`}
              >
                {day.getDate()}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <p className="font-display text-xs font-semibold uppercase tracking-widest text-muted">
          Beschikbare tijden
        </p>

        {!selectedDate && (
          <p className="mt-3 text-muted">Kies eerst een datum in de agenda.</p>
        )}

        {selectedDate && (
          <>
            <p className="mt-2 text-sm text-muted capitalize">{selectedDateLabel}</p>

            {slots.length === 0 && (
              <p className="mt-4 text-muted">Geen beschikbare tijdslots op deze dag.</p>
            )}

            {slots.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => onTimeChange(slot)}
                    className={`border-2 px-3 py-3 font-display text-sm font-bold uppercase tracking-wide transition-colors ${
                      selectedTime === slot
                        ? 'border-accent bg-accent text-white'
                        : 'border-ink/15 bg-cream-dark text-ink hover:border-accent'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
