export const WORK_START_HOUR = 7
export const WORK_END_HOUR = 20
export const DAYS_AHEAD = 30

function parseDateParts(date: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date)
  if (!match) return null

  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  const parsed = new Date(year, month - 1, day)

  if (
    parsed.getFullYear() !== year ||
    parsed.getMonth() !== month - 1 ||
    parsed.getDate() !== day
  ) {
    return null
  }

  return parsed
}

export function getAvailableSlots(date: string) {
  const parsed = parseDateParts(date)
  if (!parsed) return []

  const today = new Date()
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const maxDate = new Date(todayStart)
  maxDate.setDate(maxDate.getDate() + DAYS_AHEAD)

  if (parsed < todayStart || parsed > maxDate) {
    return []
  }

  const slots: string[] = []
  const now = new Date()

  for (let hour = WORK_START_HOUR; hour < WORK_END_HOUR; hour++) {
    const slotStart = new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate(), hour)
    if (slotStart <= now) continue
    slots.push(`${String(hour).padStart(2, '0')}:00`)
  }

  return slots
}
