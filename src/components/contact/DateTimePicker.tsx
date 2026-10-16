import { useMemo, useState } from 'react'
import { getAvailableSlots } from '../../lib/timeSlots'

type DateTimePickerProps = {
  selectedDate: string
  selectedTime: string
  onDateChange: (date: string) => void
  onTimeChange: (time: string) => void
  mode?: 'date' | 'time' | 'both'
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
  mode = 'both',
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

  const showDate = mode === 'date' || mode === 'both'
  const showTime = mode === 'time' || mode === 'both'

  return (
    <div className="flex h-full min-h-0 w-full min-w-0 flex-col">
      {showDate && (
      <div className="w-full shrink-0 min-w-0">
        <div className="flex min-w-0 items-center justify-between gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => shiftMonth(-1)}
            className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center border border-line text-ink transition-colors hover:border-ink"
            aria-label="Vorige maand"
          >
            ←
          </button>
          <p className="min-w-0 truncate text-center font-display text-lg font-semibold capitalize sm:text-xl">
            {monthFormatter.format(viewMonth)}
          </p>
          <button
            type="button"
            onClick={() => shiftMonth(1)}
            className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center border border-line text-ink transition-colors hover:border-ink"
            aria-label="Volgende maand"
          >
            →
          </button>
        </div>

        <div className="mt-4 grid w-full min-w-0 grid-cols-[repeat(7,minmax(0,1fr))] gap-1.5 sm:gap-2">
          {weekdayLabels.map((label) => (
            <span
              key={label}
              className="py-2 text-center text-xs font-medium text-muted"
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
                className={`h-11 w-full min-w-0 cursor-pointer font-display text-sm font-semibold tabular-nums transition-colors ${
                  selected
                    ? 'bg-accent text-white'
                    : selectable
                      ? 'bg-cream text-ink hover:text-accent'
                      : 'cursor-not-allowed text-muted-light'
                } ${inMonth ? '' : 'opacity-40'}`}
              >
                {day.getDate()}
              </button>
            )
          })}
        </div>
      </div>
      )}

      {showTime && (
      <div className={`flex min-h-0 w-full min-w-0 flex-1 flex-col ${showDate ? 'mt-6' : ''}`}>
        <p className="shrink-0 text-sm font-medium text-muted">
          Beschikbare tijden
        </p>

        {!selectedDate && (
          <p className="mt-3 shrink-0 text-muted">Kies eerst een datum in de agenda.</p>
        )}

        {selectedDate && (
          <>
            <p className="mt-2 shrink-0 truncate text-sm text-muted capitalize">{selectedDateLabel}</p>

            {slots.length === 0 && (
              <p className="mt-4 shrink-0 text-muted">Geen beschikbare tijdslots op deze dag.</p>
            )}

            {slots.length > 0 && (
              <div className="mt-4 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1">
                <div className="grid w-full min-w-0 grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => onTimeChange(slot)}
                      className={`min-h-11 min-w-0 cursor-pointer px-2 font-display text-sm font-semibold tabular-nums transition-colors ${
                        selectedTime === slot
                          ? 'bg-accent text-white'
                          : 'bg-cream text-ink hover:text-accent'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
      )}
    </div>
  )
}
