import { remark } from 'remark';
import remarkHtml from 'remark-html';

/**
 * Convert markdown string to HTML using remark.
 * Used server-side to render question content/solution as markdown.
 * Allows inline HTML (e.g. SVG images) via sanitize: false.
 */
export async function renderMarkdown(content: string): Promise<string> {
  try {
    const result = await remark()
      .use(remarkHtml, { sanitize: false })
      .process(content);
    return result.toString();
  } catch {
    // Fallback: escape HTML and use line breaks
    return `<p>${content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>')}</p>`;
  }
}
