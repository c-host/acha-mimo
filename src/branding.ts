/** Display titles for the app (nine modern simple preverbs, grouped). */
export const SITE_NAME_KA = 'acha mimo'
/** Repo, npm, and URL slug */
export const SITE_SHORT_SLUG = 'acha-mimo'

export function documentTitle(): string {
  return `${SITE_NAME_KA} · ${SITE_SHORT_SLUG}`
}
