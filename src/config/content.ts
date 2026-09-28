// Content freshness marker.
//
// These guides cite HDB, court, NEA, BCA and PDPC rules, which change — and a
// fabricated "updated today" on every build is worse than no date at all. So
// this is set by hand when the content is actually reviewed, and it drives
// both the dateModified in schema and the visible review line on every guide.
//
// Bump this ONLY after genuinely re-checking the guides against the official
// sources they link to.
export const LAST_REVIEWED = '2026-09-28';

export const LAST_REVIEWED_DISPLAY = '28 September 2026';
