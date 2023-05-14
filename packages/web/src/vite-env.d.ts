/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string
  readonly VITE_APP_BUCKET_REGION: string
  readonly VITE_APP_BUCKET_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}