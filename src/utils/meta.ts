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

export const DESCRIPTION_BUDGET = 158;

/**
 * Builds a meta description as `core` plus an optional `tail`, dropping the
 * tail when the pair would overrun the budget.
 *
 * Truncating mid-sentence is the usual approach and it is worse than useless —
 * a description cut off at "and the Competent Auth…" reads as broken. Dropping
 * a whole clause keeps every description a complete sentence, which is the
 * point of writing one at all.
 */
export function fitDescription(core: string, tail: string, max = DESCRIPTION_BUDGET): string {
  const combined = `${core} ${tail}`;
  return combined.length <= max ? combined : core;
}
