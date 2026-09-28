// Where the guides send a reader who would rather hand the job over.
//
// Every URL here is a page on the publisher's own sites (see site.publisher and
// /about). They are linked from one help box per page and from the prose only
// where the reader needs a service at that moment, never sitewide, and never
// with keyword-stuffed anchor text.

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

// Sister brands run by the same company. Linked only where the reader needs
// that service (a move-out clean before handover, say), never as a set.
export const homeToClean = {
  moveOut: 'https://hometoclean.com/cleaning/move-out-cleaning/',
};

export const homeToMoved = {
  home: 'https://hometomoved.com/',
};
