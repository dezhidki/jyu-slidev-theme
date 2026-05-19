import type { CSSProperties } from 'vue';

export function handleBackground(background?: string, isCover = false): CSSProperties | string {
  if (!background) return {};
  const isColor = background.startsWith('#') || background.startsWith('rgb');
  if (isColor) return { background };
  const url = background.startsWith('http') ? background : `url(${background})`;
  return {
    background: isCover ? `${url} no-repeat center center / cover` : url,
  };
}
