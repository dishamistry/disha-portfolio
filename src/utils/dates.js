const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** "2026-01" → "Jan 2026"; null → "Present". */
export function formatMonth(value) {
  if (!value) return 'Present'
  const [year, month] = value.split('-').map(Number)
  return `${MONTHS[month - 1]} ${year}`
}
