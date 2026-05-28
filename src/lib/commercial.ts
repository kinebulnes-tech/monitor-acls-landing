export type CommercialEventName =
  | 'click_demo'
  | 'submit_demo'
  | 'click_simulator'
  | 'click_buy_plan'
  | 'click_request_quote'

interface CommercialEventDetail {
  source?: string
  plan?: string
  status?: string
}

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

const fallbackSimulatorHref = '#simulador-proximamente'
const fallbackContactHref = '#contacto'

export const simulatorUrl = import.meta.env.VITE_SIMULATOR_URL?.trim() || ''

export const checkoutUrls = {
  individual: import.meta.env.VITE_CHECKOUT_INDIVIDUAL_URL?.trim() || '',
  institutional: import.meta.env.VITE_CHECKOUT_INSTITUTIONAL_URL?.trim() || '',
  enterprise: import.meta.env.VITE_CHECKOUT_ENTERPRISE_URL?.trim() || '',
}

export function hasSimulatorUrl() {
  return simulatorUrl.length > 0
}

export function getSimulatorHref() {
  return hasSimulatorUrl() ? simulatorUrl : fallbackSimulatorHref
}

export function getCheckoutHref(plan: keyof typeof checkoutUrls) {
  return checkoutUrls[plan] || fallbackContactHref
}

export function isExternalHref(href: string) {
  return /^https?:\/\//.test(href)
}

export function trackCommercialEvent(eventName: CommercialEventName, detail: CommercialEventDetail = {}) {
  if (typeof window === 'undefined') return

  window.dispatchEvent(new CustomEvent(eventName, { detail }))
  window.dataLayer?.push({ event: eventName, ...detail })
}
