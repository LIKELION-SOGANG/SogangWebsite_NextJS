declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_BASE_URL: string
    NEXT_PUBLIC_APP_URL: string
    NEXT_PUBLIC_GTM_ID: string
    NEXT_PUBLIC_GA_ID: string
  }
}

interface Window {
  gtag: unknown
}
