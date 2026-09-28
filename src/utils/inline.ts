import { withBase } from '../config/site';

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (c) => ESCAPES[c]);
}

/**
 * Renders the inline markup the guide data allows — [links](…) and **bold** —
 * to HTML. Everything is escaped first, so a stray angle bracket in a data file
 * can never become markup, and the only tags that can come out are <a> and
 * <strong>.
 *
 * Internal links go through withBase() so they carry the trailing slash GitHub
 * Pages serves. External links open in a new tab, because every one of them is
 * a source or a service the reader will want to come back from.
 */
export function renderInline(text: string): string {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label: string, href: string) => {
      if (href.startsWith('/')) return `<a href="${withBase(href)}">${label}</a>`;
      if (href.startsWith('mailto:')) return `<a href="${href}">${label}</a>`;
      return `<a href="${href}" rel="noopener" target="_blank">${label}</a>`;
    });
}

/** The same text with the markup stripped, for meta tags and schema. */
export function plainInline(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1');
}
