/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GAS_BOOKING_URL?: string
  readonly VITE_GAS_BOOKING_SECRET?: string
  readonly VITE_BASE_PATH?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
