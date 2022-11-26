import sanitizeHtml from 'sanitize-html';
export const sanitize = (content: string) => sanitizeHtml(content, {
    allowedTags: [],
    allowedAttributes: {}
});