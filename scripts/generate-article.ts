#!/usr/bin/env tsx
/**
 * Capitalloss — Daily Article Generator
 *
 * Calls the Anthropic API to generate a new editorial article in the
 * Capitalloss brand voice, then writes it to content/articles/ as a
 * markdown file. Run by GitHub Actions on a daily cron schedule.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=... npx tsx scripts/generate-article.ts
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// ─── Topic pool ───────────────────────────────────────────────────────────────
// The generator picks a category and angle, then lets the model find a specific
// story. Add more entries here over time to expand the range.

const CATEGORIES = [
  "Business",
  "Creative",
  "Founders",
  "Artists",
  "Personal",
] as const;

const TOPIC_ANGLES = [
  "a business that failed because of a single avoidable decision",
  "a creative person who sacrificed their art for industry access",
  "a founder who raised money and lost control of their vision",
  "a person who quit too early on something that would have worked",
  "a person who stayed too long in something that had already failed",
  "an artist who chose money over craft and what it cost them long-term",
  "a business partnership that destroyed a friendship",
  "a moment where pride made someone ignore an obvious warning sign",
  "a person who bet everything on one client and lost when the client left",
  "a creative who went viral and lost the thing that made their work good",
  "a business owner who hired the wrong person and paid for it for years",
  "a founder who ignored their mental health until it affected the company",
  "an operator who scaled too fast and destroyed the product quality",
  "a person who got the opportunity they wanted and realized it cost more than expected",
  "a musician who signed a bad deal early and spent years working out of it",
  "a freelancer who under-priced themselves for years and what that pattern cost",
  "a startup that died because of co-founder conflict, not market fit",
  "a creative director who changed their aesthetic for a brand and lost their audience",
  "a business owner who ignored cashflow while focused on growth and crashed",
  "a person who passed on an opportunity out of fear and watched it succeed without them",
];

function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 70)
    .replace(/^-|-$/g, "");
}

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

// ─── Prompt ───────────────────────────────────────────────────────────────────

function buildPrompt(category: string, angle: string): string {
  return `You are writing for Capitalloss — an editorial archive about the mistakes behind ambition.

The brand voice is:
- Reflective, sharp, honest, culturally aware
- Not preachy. Not self-help. Not "hustle culture"
- More like: "Here is what happened. Here is what it cost. Here is what can be learned."
- Think: long-form magazine writing, not blog writing
- Specific, grounded, human. Third-person narrative or first-person essay.
- No generic advice. No lists of tips. No inspirational conclusions.

Write one complete article about: **${angle}**

Category: ${category}

Requirements:
- 600–900 words of body text
- Strong opening that drops the reader into a situation
- 2–3 H2 section breaks with evocative, specific titles (not generic)
- At least one blockquote pull quote that captures the emotional or intellectual core
- Ends with the real cost — concrete, honest, not wrapped in a bow
- Characters should feel real but not named with obvious fake names — use real first names only (no last names)
- The story can be composite/illustrative, but should read as specific and true

Format your response as a complete markdown document with this exact frontmatter:

---
title: "TITLE HERE"
date: "${todayISO()}"
excerpt: "ONE SENTENCE — sharp, specific, 15–25 words that make someone want to read it"
category: "${category}"
tags: ["tag1", "tag2", "tag3"]
---

[article body here]

Return ONLY the markdown. No explanation, no preamble, no commentary after the article.`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function generateArticle(): Promise<void> {
  const category = pickRandom(CATEGORIES);
  const angle = pickRandom(TOPIC_ANGLES);

  console.log(`\n→ Generating article`);
  console.log(`  Category: ${category}`);
  console.log(`  Angle: ${angle}\n`);

  const message = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 2000,
    messages: [
      {
        role: "user",
        content: buildPrompt(category, angle),
      },
    ],
  });

  const raw =
    message.content[0].type === "text" ? message.content[0].text.trim() : "";

  if (!raw) {
    throw new Error("Empty response from API");
  }

  // Extract the title to generate a slug
  const titleMatch = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m);
  const title = titleMatch ? titleMatch[1].replace(/["']/g, "") : `article-${Date.now()}`;
  const slug = slugify(title);
  const filename = `${slug}.md`;

  const outputDir = path.join(process.cwd(), "content", "articles");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Avoid overwriting existing articles
  let finalFilename = filename;
  let counter = 1;
  while (fs.existsSync(path.join(outputDir, finalFilename))) {
    finalFilename = `${slug}-${counter}.md`;
    counter++;
  }

  const outputPath = path.join(outputDir, finalFilename);
  fs.writeFileSync(outputPath, raw, "utf-8");

  console.log(`✓ Written: content/articles/${finalFilename}`);
  console.log(`  Title: ${title}`);
  console.log(`  Category: ${category}`);
}

generateArticle().catch((err) => {
  console.error("✗ Generation failed:", err.message);
  process.exit(1);
});
