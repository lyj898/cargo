// Title budgeting for generated pages.
//
// Google renders roughly 60 characters of a title and rewrites anything longer,
// which on a programmatic site means the descriptive tail you carefully wrote
// gets replaced by whatever the crawler picks off the page. So each generator
// supplies a preferred title and a shorter fallback, and the fallback is used
// whenever the preferred one busts the budget. Some product names are long
// enough that even the fallback overruns — that is fine, it just means the
// keyword itself is the title, which is the right trade.

export const TITLE_BUDGET = 62;

export function fitTitle(preferred: string, fallback: string, max = TITLE_BUDGET): string {
  return preferred.length <= max ? preferred : fallback;
}
