/**
 * Experience duration calculations.
 *
 * Date rules (kept the same everywhere so totals are consistent):
 * - Dates are "YYYY-MM" or "YYYY-MM-DD". Calculations use month precision, as
 *   LinkedIn does; a day part, if given, is validated but otherwise ignored.
 * - Both the start month and the end month are counted (inclusive), so
 *   "Jan 2026 – Jan 2026" is 1 month and "Dec 2018 – May 2019" is 6 months.
 * - A current role (isCurrent: true, endDate: null) runs until the month of
 *   the reference date, which defaults to "now" in the visitor's time zone.
 *
 * Every function accepts an optional `referenceDate` so results are
 * deterministic in tests, e.g. getExperienceTotals(jobs, new Date(2026, 9, 1)).
 */

const DATE_PATTERN = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/

/** Converts "YYYY-MM" / "YYYY-MM-DD" to a month count (year * 12 + month), or null if invalid. */
export function parseMonthIndex(value) {
  if (typeof value !== 'string') return null
  const match = DATE_PATTERN.exec(value.trim())
  if (!match) return null

  const year = Number(match[1])
  const month = Number(match[2])
  if (month < 1 || month > 12) return null

  if (match[3] !== undefined) {
    const day = Number(match[3])
    const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate()
    if (day < 1 || day > daysInMonth) return null
  }

  return year * 12 + (month - 1)
}

function monthIndexOfDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return null
  return date.getFullYear() * 12 + date.getMonth()
}

/** Splits a month count into { totalMonths, years, months }. */
export function splitMonths(totalMonths) {
  return {
    totalMonths,
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  }
}

/**
 * Returns a role's period as inclusive month indexes { start, end },
 * or null when its dates are missing, malformed or contradictory.
 * A current role that starts after the reference date has end < start (0 months).
 */
function getRolePeriod(role, referenceDate) {
  const start = parseMonthIndex(role.startDate)
  if (start === null) return null

  if (role.isCurrent) {
    // A current role must not also have an end date — that would be ambiguous.
    if (role.endDate != null) return null
    const end = monthIndexOfDate(referenceDate)
    return end === null ? null : { start, end }
  }

  const end = parseMonthIndex(role.endDate)
  if (end === null || end < start) return null
  return { start, end }
}

/**
 * Duration of a single role, or null if its dates are invalid.
 * Example: Dec 2022 – Jan 2026 → { totalMonths: 38, years: 3, months: 2 }.
 */
export function getRoleDuration(role, referenceDate = new Date()) {
  const period = getRolePeriod(role, referenceDate)
  if (!period) return null
  return splitMonths(Math.max(0, period.end - period.start + 1))
}

/**
 * Total experience across roles, with overlapping periods merged so no month
 * is counted twice. Roles with `countsTowardExperience: false` are skipped.
 *
 * Returns { totalMonths, years, months, isComplete, invalidRoles }.
 * `isComplete` is false if any counted role has unusable dates; callers
 * should then avoid showing the number as an exact total.
 */
export function getExperienceTotals(roles, referenceDate = new Date()) {
  const periods = []
  const invalidRoles = []

  for (const role of roles) {
    if (role.countsTowardExperience === false) continue
    const period = getRolePeriod(role, referenceDate)
    if (!period) invalidRoles.push(role.company || '(unnamed role)')
    else if (period.end >= period.start) periods.push(period)
  }

  // Merge overlapping (or back-to-back) periods, then sum their lengths.
  periods.sort((a, b) => a.start - b.start)
  const merged = []
  for (const period of periods) {
    const last = merged.at(-1)
    if (last && period.start <= last.end + 1) last.end = Math.max(last.end, period.end)
    else merged.push({ ...period })
  }
  const totalMonths = merged.reduce((sum, p) => sum + (p.end - p.start + 1), 0)

  return {
    ...splitMonths(totalMonths),
    isComplete: invalidRoles.length === 0 && merged.length > 0,
    invalidRoles,
  }
}

const plural = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`

/**
 * "3 years, 2 months" / "10 months" / "1 year".
 * Pass { separator: ' and ' } for prose: "7 years and 6 months".
 */
export function formatDuration(duration, { separator = ', ' } = {}) {
  if (!duration) return ''
  const parts = []
  if (duration.years) parts.push(plural(duration.years, 'year'))
  if (duration.months) parts.push(plural(duration.months, 'month'))
  return parts.length ? parts.join(separator) : 'Less than a month'
}

/** Rounded-down headline form: "7+ years", "7 years" (exact) or "10 months". */
export function formatYearsPlus(duration) {
  if (!duration) return ''
  if (duration.years === 0) return formatDuration(duration)
  return duration.months ? `${duration.years}+ years` : plural(duration.years, 'year')
}

// Wording used when the total can't be calculated reliably (e.g. a role has a bad date).
const UNKNOWN_TOTAL = 'several years'

/**
 * Replaces experience placeholders in profile text:
 *   {experienceYears}    → "7+ years"
 *   {experienceDuration} → "7 years and 6 months"
 */
export function fillExperiencePlaceholders(text, totals) {
  const known = totals?.isComplete
  return text
    .replaceAll('{experienceYears}', known ? formatYearsPlus(totals) : UNKNOWN_TOTAL)
    .replaceAll('{experienceDuration}', known ? formatDuration(totals, { separator: ' and ' }) : UNKNOWN_TOTAL)
}
