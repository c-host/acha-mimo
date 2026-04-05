/** Escape text for safe insertion into HTML text nodes and attributes. */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function escapeAttr(s: string): string {
  return escapeHtml(s).replace(/'/g, '&#39;')
}

/** Safe one-line message for error UI (never interpret as HTML). */
export function safeErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message || e.name || 'Error'
  if (typeof e === 'string') return e
  try {
    return JSON.stringify(e)
  } catch {
    return String(e)
  }
}
