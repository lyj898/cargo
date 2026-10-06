// Where the guides send a reader who would rather hand the job over.
//
// Junk to Clear is a separate company the family refers disposal, clearance
// and renovation jobs to (see site.partner and /about); HomeToClean and
// HomeToMoved are family sites run by the same team. Each is linked from one
// help box per page and from the prose only where the reader needs that
// service at that moment, never sitewide, and never with keyword-stuffed
// anchor text.

const JUNK_TO_CLEAR = 'https://junktoclear.com.sg';

export const junkToClear = {
  home: `${JUNK_TO_CLEAR}/`,
  residential: `${JUNK_TO_CLEAR}/services/residential-waste-disposal-singapore/`,
  business: `${JUNK_TO_CLEAR}/services/business-waste-disposal-singapore/`,
  secure: `${JUNK_TO_CLEAR}/services/secure-waste-disposal-singapore/`,
  renovation: `${JUNK_TO_CLEAR}/services/renovation-services-singapore/`,
  skipTank: `${JUNK_TO_CLEAR}/services/skip-tank-rental-singapore/`,
  officeChecklist: `${JUNK_TO_CLEAR}/blogs/office-clearance-singapore-moving-disposal-checklist/`,
};

// Family sites run by the same team. Linked only where the reader needs that
// service (a move-out clean before handover, say), never as a set, and always
// with "run by the same team" in the same sentence.
export const homeToClean = {
  moveOut: 'https://hometoclean.com/cleaning/move-out-cleaning/',
};

export const homeToMoved = {
  home: 'https://hometomoved.com/',
};
