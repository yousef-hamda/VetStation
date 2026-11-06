import { describe, expect, it } from 'vitest';
import { translations, type Locale } from './i18n';
import { legalContent } from './legal';

function leaves(value: unknown, prefix = ''): Array<[string, string]> {
  if (typeof value === 'string') return [[prefix, value]];
  if (!value || typeof value !== 'object') throw new Error(`Unexpected translation at ${prefix}`);
  return Object.entries(value).flatMap(([key, child]) => leaves(child, prefix ? `${prefix}.${key}` : key));
}

describe('three-language public content', () => {
  const locales: Locale[] = ['he', 'ar', 'en'];

  it('has a non-empty translation for every key in every language', () => {
    const paths = leaves(translations.en).map(([path]) => path);
    for (const locale of locales) {
      const entries = leaves(translations[locale]);
      expect(entries.map(([path]) => path)).toEqual(paths);
      for (const [path, text] of entries) expect(text.trim(), `${locale}: ${path}`).not.toBe('');
    }
  });

  it('provides privacy, accessibility and service notices in every language', () => {
    for (const locale of locales) {
      for (const key of ['privacy', 'accessibility', 'terms'] as const) {
        const notice = legalContent[locale][key];
        expect(notice.title.trim()).not.toBe('');
        expect(notice.paragraphs.length).toBeGreaterThanOrEqual(3);
        expect(notice.paragraphs.every((paragraph) => paragraph.trim().length > 20)).toBe(true);
      }
    }
  });
});
