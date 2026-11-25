import {
  siteKnowledge,
  CHATBOT_FALLBACK,
  type KnowledgeEntry,
} from "@/data/siteKnowledge";

const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "could",
  "should",
  "may",
  "might",
  "must",
  "shall",
  "can",
  "need",
  "dare",
  "ought",
  "used",
  "to",
  "of",
  "in",
  "for",
  "on",
  "with",
  "at",
  "by",
  "from",
  "as",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "between",
  "under",
  "again",
  "further",
  "then",
  "once",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "no",
  "nor",
  "not",
  "only",
  "own",
  "same",
  "so",
  "than",
  "too",
  "very",
  "just",
  "and",
  "but",
  "if",
  "or",
  "because",
  "until",
  "while",
  "about",
  "what",
  "which",
  "who",
  "whom",
  "this",
  "that",
  "these",
  "those",
  "am",
  "i",
  "you",
  "your",
  "yours",
  "we",
  "our",
  "they",
  "their",
  "me",
  "my",
  "tell",
  "please",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word));
}

function scoreEntry(query: string, tokens: string[], entry: KnowledgeEntry): number {
  const normalizedQuery = query.toLowerCase();
  let score = 0;

  for (const keyword of entry.keywords) {
    if (normalizedQuery.includes(keyword.toLowerCase())) {
      score += keyword.includes(" ") ? 8 : 5;
    }
  }

  if (normalizedQuery.includes(entry.topic.toLowerCase())) {
    score += 6;
  }

  const entryWords = new Set([
    ...tokenize(entry.topic),
    ...entry.keywords.flatMap((k) => tokenize(k)),
    ...tokenize(entry.content),
  ]);

  for (const token of tokens) {
    if (entryWords.has(token)) {
      score += 2;
    }
    for (const keyword of entry.keywords) {
      if (keyword.toLowerCase().includes(token)) {
        score += 3;
      }
    }
  }

  return score;
}

export function searchKnowledge(query: string): string {
  const trimmed = query.trim();
  if (!trimmed) {
    return "Please type a question and I'll search our website content for an answer.";
  }

  const tokens = tokenize(trimmed);
  if (tokens.length === 0) {
    return CHATBOT_FALLBACK;
  }

  const scored = siteKnowledge
    .map((entry) => ({ entry, score: scoreEntry(trimmed, tokens, entry) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0 || scored[0].score < 4) {
    return CHATBOT_FALLBACK;
  }

  const top = scored[0];
  const related = scored
    .slice(1, 3)
    .filter(({ score }) => score >= top.score * 0.6)
    .map(({ entry }) => entry.content);

  const parts = [top.entry.content, ...related];
  return [...new Set(parts)].join("\n\n");
}
