export type CommercialEventName =
  | 'click_demo'
  | 'submit_demo'
  | 'click_simulator'
  | 'click_buy_plan'
  | 'click_request_quote'

export type BillingCycle = 'monthly' | 'annual'

interface CommercialEventDetail {
  source?: string
  plan?: string
  billingCycle?: BillingCycle
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

// TODO: Set these env vars to activate checkout (Stripe/MercadoPago/Webpay links)
// VITE_CHECKOUT_INDIVIDUAL_MONTHLY_URL
// VITE_CHECKOUT_INDIVIDUAL_ANNUAL_URL
// VITE_CHECKOUT_INSTITUTIONAL_MONTHLY_URL
// VITE_CHECKOUT_INSTITUTIONAL_ANNUAL_URL
export const checkoutUrls = {
  individual: {
    monthly: import.meta.env.VITE_CHECKOUT_INDIVIDUAL_MONTHLY_URL?.trim() || '',
    annual: import.meta.env.VITE_CHECKOUT_INDIVIDUAL_ANNUAL_URL?.trim() || '',
  },
  institutional: {
    monthly: import.meta.env.VITE_CHECKOUT_INSTITUTIONAL_MONTHLY_URL?.trim() || '',
    annual: import.meta.env.VITE_CHECKOUT_INSTITUTIONAL_ANNUAL_URL?.trim() || '',
  },
}

export function hasSimulatorUrl() {
  return simulatorUrl.length > 0
}

export function getSimulatorHref() {
  return hasSimulatorUrl() ? simulatorUrl : fallbackSimulatorHref
}

export function getCheckoutHref(plan: keyof typeof checkoutUrls, billing: BillingCycle = 'monthly') {
  return checkoutUrls[plan][billing] || ''
}

export function hasCheckoutUrl(plan: keyof typeof checkoutUrls, billing: BillingCycle) {
  return checkoutUrls[plan][billing].length > 0
}

export function isExternalHref(href: string) {
  return /^https?:\/\//.test(href)
}

export function trackCommercialEvent(eventName: CommercialEventName, detail: CommercialEventDetail = {}) {
  if (typeof window === 'undefined') return

  window.dispatchEvent(new CustomEvent(eventName, { detail }))
  window.dataLayer?.push({ event: eventName, ...detail })
}
