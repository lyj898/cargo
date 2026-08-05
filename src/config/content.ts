// Content freshness marker.
//
// Regulatory pages age badly and search engines reward pages that are visibly
// maintained — but a fabricated "updated today" on every build is worse than no
// date at all. So this is set by hand when the content is actually reviewed,
// and it drives both the dateModified in schema and the visible line in the
// footer of guide pages.
//
// Bump this ONLY after genuinely re-checking the regulatory pages against the
// authorities' current published requirements.
export const LAST_REVIEWED = '2026-08-05';

export const LAST_REVIEWED_DISPLAY = 'August 2026';
