type WordSizes = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  p: string;
  s: string;
};

const wordSizes: WordSizes = {
  h1: "clamp(3.5rem, 5vw, 4.5rem)",
  h2: "clamp(2.5rem, 4vw, 3.5rem)",
  h3: "clamp(2rem, 3vw, 2.5rem)",
  h4: "clamp(1.5rem, 2.5vw, 2rem)",
  h5: "clamp(1.25rem, 2vw, 1.5rem)",
  h6: "clamp(1rem, 1.5vw, 1.25rem)",
  p: "clamp(1rem, 2.5vw, 1.25rem)",
  s: "clamp(0.75rem, 2vw, 0.875rem)",
} as const;

type WordSizeKey = keyof typeof wordSizes;

export function getwordSizes({ key }: { key: WordSizeKey }) {
  return wordSizes[key];
}
