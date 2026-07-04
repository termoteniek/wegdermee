import type { BookingFormData } from '../types/booking'

export type SubmitBookingResult =
  | { ok: true }
  | { ok: false; message: string }

export async function submitBooking(
  form: BookingFormData,
  honeypot: string
): Promise<SubmitBookingResult> {
  const url = import.meta.env.VITE_GAS_BOOKING_URL?.trim()
  const token = import.meta.env.VITE_GAS_BOOKING_SECRET?.trim()

  if (!url || !token) {
    return {
      ok: false,
      message: 'Het formulier is nog niet geconfigureerd. Neem contact op via info@wegdermee.com.',
    }
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        ...form,
        token,
        _honeypot: honeypot,
      }),
    })

    const data = (await response.json()) as { success?: boolean; error?: string }

    if (!response.ok || !data.success) {
      return {
        ok: false,
        message: data.error || 'Verzenden mislukt. Probeer het opnieuw of bel ons.',
      }
    }

    return { ok: true }
  } catch {
    return {
      ok: false,
      message: 'Verzenden mislukt. Controleer uw verbinding en probeer het opnieuw.',
    }
  }
}
