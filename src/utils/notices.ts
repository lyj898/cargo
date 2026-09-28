// The two resident notices on /buildings/notice-templates, as plain text.
//
// Shared by the page (which renders them at build time, so the wording is in
// the HTML for readers without JavaScript and for search engines) and by its
// script (which re-renders them as the user types). One source of wording, so
// the two can't drift apart.
//
// The wording deliberately stops short of asserting powers the management may
// not have: neither the Building (Strata Management) Act nor the prescribed
// by-laws gives an MCST an explicit power to remove or dispose of items. See
// the note at the top of src/data/library/buildings.ts.

export type NoticeFields = {
  development: string;
  mcst: string;
  contact: string;
  /** Notice date as YYYY-MM-DD. Empty renders a bracketed prompt. */
  date: string;
  location: string;
  items: string;
  days: number;
};

export const emptyFields: NoticeFields = {
  development: '',
  mcst: '',
  contact: '',
  date: '',
  location: '',
  items: '',
  days: 7,
};

// Blank fields show a bracketed prompt, so a half-filled notice can't be
// mistaken for a finished one.
const or = (value: string, prompt: string) => value.trim() || `[${prompt}]`;

function formatDate(iso: string, withWeekday = false): string | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString('en-SG', {
    ...(withWeekday ? { weekday: 'long' as const } : {}),
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function addDays(iso: string, days: number): string | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() + days);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function header(f: NoticeFields): string {
  return `${or(f.development, 'DEVELOPMENT NAME').toUpperCase()}\nMANAGEMENT CORPORATION STRATA TITLE PLAN NO. ${or(f.mcst, 'NUMBER')}`;
}

function footer(f: NoticeFields): string {
  return `The Management\nManagement office: ${or(f.contact, 'phone or email')}`;
}

export function bulkyNotice(f: NoticeFields): string {
  return [
    header(f),
    '',
    'NOTICE TO ALL RESIDENTS',
    'Disposing of bulky items',
    '',
    `Date: ${formatDate(f.date) ?? '[date of notice]'}`,
    '',
    'Bulky items, such as furniture, mattresses, large appliances and renovation debris, must not be left in the bin centre, corridors, staircases, lift lobbies or car park. These areas are common property. Items left there obstruct other residents and can block escape routes in an emergency.',
    '',
    'To dispose of a bulky item:',
    '1. Arrange its removal with a disposal contractor of your choice, or ask the management office about the arrangements for this development.',
    '2. Tell the management office before the removal, so the service lift and loading bay can be booked.',
    '3. Make sure the item is taken away on the day. Items must not be left in common areas to wait for collection.',
    '',
    'Renovation debris must be removed from the development by the owner’s contractor, and must not be placed in the bin centre.',
    '',
    'Under the by-laws, residents must not obstruct common property, or leave rubbish or discarded items on it, without the Management’s prior written approval. Items left in common areas will be dealt with under the by-laws, which may include arranging for their removal.',
    '',
    'Thank you for your cooperation.',
    '',
    footer(f),
  ].join('\n');
}

export function removalNotice(f: NoticeFields): string {
  const days = Math.min(60, Math.max(1, Math.round(f.days) || 7));
  const deadline = addDays(f.date, days);
  return [
    header(f),
    '',
    'NOTICE OF ITEMS LEFT ON COMMON PROPERTY',
    '',
    `Date of notice: ${formatDate(f.date) ?? '[date of notice]'}`,
    `Location: ${or(f.location, 'where the items are')}`,
    `Items: ${or(f.items, 'description of the items')}`,
    '',
    'The items described above have been left on common property. Common property must be kept clear, and items in corridors and staircases can obstruct escape routes in an emergency.',
    '',
    `If these items belong to you, please remove them, or contact the management office to arrange their removal, by ${(deadline && formatDate(deadline, true)) ?? `[date, ${days} days after the notice]`}.`,
    '',
    'If the items are not removed or claimed by that date, the Management will take action under the by-laws, which may include arranging for their removal.',
    '',
    'Obstructing corridors, staircases and other escape routes is also an offence under the Fire Safety Act.',
    '',
    'Photographs of the items have been taken for the Management’s records.',
    '',
    footer(f),
  ].join('\n');
}
