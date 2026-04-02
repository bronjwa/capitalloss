#!/usr/bin/env tsx
/**
 * Capitalloss — Daily Article Generator
 *
 * Generates editorial articles based on real, publicly documented cases.
 * All articles cite verified sources. Run by GitHub Actions on a daily cron.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=... npx tsx scripts/generate-article.ts
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ─── Documented real cases ────────────────────────────────────────────────────
// Each entry is a real, well-documented case from public record.
// Source types: book, interview, podcast, journalism, court/SEC filing.

const REAL_CASES = [
  {
    category: "Founders",
    subject: "Adam Neumann and WeWork",
    angle: "how Adam Neumann's obsession with scale and personal excess contributed to WeWork's $47B valuation collapse in 2019",
    sources: [
      "\"The Cult of We\" by Eliot Brown and Maureen Farrell (WSJ Books, 2021)",
      "SEC S-1 filing, WeWork IPO withdrawal, September 2019",
      "Wall Street Journal reporting by Eliot Brown, 2019–2020",
    ],
  },
  {
    category: "Founders",
    subject: "Elizabeth Holmes and Theranos",
    angle: "how Elizabeth Holmes built a $9 billion company on technology that did not work, and the choices that made exposure inevitable",
    sources: [
      "\"Bad Blood\" by John Carreyrou (Knopf, 2018)",
      "Carreyrou's original WSJ investigation, October 2015",
      "United States v. Holmes, court testimony, 2021",
    ],
  },
  {
    category: "Business",
    subject: "Ron Johnson's tenure as JCPenney CEO",
    angle: "how Ron Johnson's decision to eliminate sales and coupons at JCPenney — without testing the idea — destroyed $4.3 billion in revenue in 17 months",
    sources: [
      "\"The Whole Story\" — Ron Johnson's own reflections in Harvard Business Review, 2013",
      "JCPenney annual reports 2011–2013",
      "Fortune magazine coverage of the JCPenney turnaround failure, 2013",
    ],
  },
  {
    category: "Business",
    subject: "Blockbuster's decision to pass on buying Netflix",
    angle: "how Blockbuster's leadership, constrained by short-term financial thinking, passed on acquiring Netflix for $50 million in 2000 and chose to defend a dying model instead",
    sources: [
      "Reed Hastings interview, GQ, 2013",
      "\"That Will Never Work\" by Marc Randolph (Little, Brown, 2019)",
      "Bloomberg Businessweek, \"The Last Blockbuster,\" 2020",
    ],
  },
  {
    category: "Creative",
    subject: "Decca Records rejecting The Beatles",
    angle: "how Decca Records A&R executive Dick Rowe turned down The Beatles in January 1962, and what the decision reveals about how institutions misread originality",
    sources: [
      "\"The Beatles Anthology\" (Chronicle Books, 2000)",
      "Dick Rowe interview, BBC, 1981",
      "Mark Lewisohn, \"Tune In\" (Crown Archetype, 2013)",
    ],
  },
  {
    category: "Founders",
    subject: "Evan Williams and Odeo becoming Twitter",
    angle: "how Evan Williams built Odeo, a podcasting company that became immediately obsolete the day Apple added podcasts to iTunes — and the pivot that followed",
    sources: [
      "Nick Bilton, \"Hatching Twitter\" (Portfolio/Penguin, 2013)",
      "Ev Williams interview, Tim Ferriss Show, 2017",
      "Business Insider retrospective on Twitter's origin, 2011",
    ],
  },
  {
    category: "Business",
    subject: "Quibi's $1.75 billion failure",
    angle: "how Quibi raised $1.75 billion, launched in April 2020, and shut down six months later — and what the failure reveals about product-market fit and timing assumptions",
    sources: [
      "Jeffrey Katzenberg and Meg Whitman interviews, Wall Street Journal, October 2020",
      "The Verge: \"Quibi is shutting down,\" October 2020",
      "Bloomberg coverage of Quibi's launch and collapse, 2020",
    ],
  },
  {
    category: "Artists",
    subject: "Lorde and the commercial pressure after Pure Heroine",
    angle: "how Lorde publicly discussed the creative cost of commercial expectations after the success of Pure Heroine, and the three-year gap before Melodrama",
    sources: [
      "Lorde interview, New York Times Magazine, 2017",
      "Lorde interview, Beats 1 / Apple Music, 2017",
      "Rolling Stone cover profile, \"Lorde Opens Up,\" 2017",
    ],
  },
  {
    category: "Founders",
    subject: "Travis Kalanick and Uber",
    angle: "how Travis Kalanick's aggressive culture-building at Uber eventually destroyed his tenure as CEO — and what the pattern of early wins masking deeper dysfunction looks like",
    sources: [
      "\"Super Pumped\" by Mike Isaac (W.W. Norton, 2019)",
      "Susan Fowler's blog post, \"Reflecting on One Very, Very Strange Year at Uber,\" February 2017",
      "New York Times investigation into Uber culture, 2017",
    ],
  },
  {
    category: "Business",
    subject: "Sears Holdings and Eddie Lampert",
    angle: "how Eddie Lampert's hedge fund management approach — internal competition between Sears divisions — accelerated the collapse of one of America's largest retailers",
    sources: [
      "\"Sears: The Decline of a Great American Brand\" — Bloomberg Businessweek, 2013",
      "Fortune: \"Eddie Lampert's Sears Disaster,\" 2018",
      "Sears bankruptcy filing, October 2018",
    ],
  },
  {
    category: "Personal",
    subject: "Kanye West's business and reputational losses",
    angle: "the documented sequence of decisions — from Adidas to Gap to his public statements — that cost Kanye West his billionaire status and most of his business partnerships by 2023",
    sources: [
      "Forbes: \"Kanye West Is No Longer a Billionaire,\" October 2022",
      "Adidas termination statement, October 2022",
      "New York Times reporting on the Gap partnership collapse, 2022",
    ],
  },
  {
    category: "Creative",
    subject: "Chappelle's Show and Dave Chappelle walking away",
    angle: "how Dave Chappelle walked away from a $50 million deal at the height of Chappelle's Show — and what his own account of that decision reveals about creative loss versus personal preservation",
    sources: [
      "Dave Chappelle interview, Inside the Actors Studio, 2006",
      "Dave Chappelle interview, Oprah Winfrey Show, 2006",
      "The Oprah Magazine profile, 2006",
    ],
  },
  {
    category: "Founders",
    subject: "Stewart Butterfield and Glitch becoming Slack",
    angle: "how Stewart Butterfield's failed game Glitch cost millions and years — and how the internal communication tool built during that failure became Slack",
    sources: [
      "Stewart Butterfield interview, Masters of Scale with Reid Hoffman, 2018",
      "Wired: \"The Most Fascinating Profile You'll Ever Read About a Guy and His Boring Startup,\" 2015",
      "Forbes profile of Slack's origin, 2019",
    ],
  },
  {
    category: "Business",
    subject: "Kodak's failure to act on its own digital camera invention",
    angle: "how Kodak engineer Steve Sasson invented the digital camera in 1975, and how the company's protection of its film revenue delayed adoption until the technology destroyed them",
    sources: [
      "Steve Sasson interview, New York Times, 2008",
      "Harvard Business Review: \"Kodak's Downfall Wasn't About Technology,\" 2016",
      "Kodak bankruptcy filing, January 2012",
    ],
  },
  {
    category: "Artists",
    subject: "The Smiths breakup and Johnny Marr's departure",
    angle: "how Johnny Marr's decision to leave The Smiths in 1987 — driven by creative exhaustion and interpersonal tension with Morrissey — ended one of the most important bands of the decade",
    sources: [
      "Johnny Marr, \"Set the Boy Free\" (Dey Street Books, 2016)",
      "Morrissey, \"Autobiography\" (Penguin Classics, 2013)",
      "Mojo Magazine retrospective, \"The Smiths: The End of the Affair,\" 2012",
    ],
  },
  {
    category: "Business",
    subject: "MySpace ceding ground to Facebook",
    angle: "how MySpace's leadership, distracted by News Corp integration and focused on advertising revenue over user experience, allowed Facebook to overtake them between 2007 and 2009",
    sources: [
      "\"The Facebook Effect\" by David Kirkpatrick (Simon & Schuster, 2010)",
      "Wired: \"The Rise and Fall of MySpace,\" 2011",
      "Tom Anderson interviews, various, 2011–2013",
    ],
  },
  {
    category: "Founders",
    subject: "Andrew Mason and Groupon's IPO and decline",
    angle: "how Andrew Mason took Groupon from $0 to a $13 billion IPO in three years — then watched the valuation collapse to under $3 billion within a year, and what he said about it afterward",
    sources: [
      "Andrew Mason's leaked farewell memo, February 2013",
      "Bloomberg: \"The Rise and Fall of Groupon,\" 2013",
      "Forbes retrospective on Groupon's IPO, 2011–2013",
    ],
  },
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 72)
    .replace(/^-|-$/g, "");
}

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

// ─── Avoid repeating recent cases ─────────────────────────────────────────────

function getRecentSlugs(): string[] {
  const dir = path.join(process.cwd(), "content", "articles");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).map((f) => f.replace(/\.(md|mdx)$/, ""));
}

function caseAlreadyUsed(subject: string, recentSlugs: string[]): boolean {
  const key = slugify(subject).slice(0, 20);
  return recentSlugs.some((s) => s.includes(key));
}

// ─── Prompt ───────────────────────────────────────────────────────────────────

function buildPrompt(entry: typeof REAL_CASES[0]): string {
  const sourcesText = entry.sources.map((s, i) => `${i + 1}. ${s}`).join("\n");

  return `You are writing for Capitalloss — a serious editorial archive about the real costs behind ambition.

**Brand voice:**
- Reflective, sharp, honest, culturally aware — not preachy, not self-help
- Reads like long-form magazine journalism, not a blog post
- "Here is what happened. Here is what it cost. Here is what it reveals."
- Third-person narrative. Specific and grounded. No clichés.
- The ending should land on the real, specific cost — not an inspirational lesson

**Article subject:** ${entry.subject}
**Core angle:** Write about ${entry.angle}

**Verified sources to draw from:**
${sourcesText}

**Requirements:**
- 700–950 words of article body
- Opening paragraph drops the reader into the story immediately — no preamble
- 2–3 H2 section breaks with specific, evocative titles
- At least one blockquote pull quote capturing the emotional or intellectual core
- Final section ends on the actual cost — concrete and honest, not wrapped up neatly
- Close with a "Sources" section listing each source cited in the article

**Format — return ONLY this markdown, nothing else:**

---
title: "TITLE HERE"
date: "${todayISO()}"
excerpt: "One sentence, 15–25 words, sharp and specific — makes someone want to read it"
category: "${entry.category}"
tags: ["tag1", "tag2", "tag3"]
---

[article body here]

## Sources

[numbered source list here]
`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function generateArticle(): Promise<void> {
  const recentSlugs = getRecentSlugs();

  // Pick a case that hasn't been used recently
  const available = REAL_CASES.filter((c) => !caseAlreadyUsed(c.subject, recentSlugs));
  const pool = available.length > 0 ? available : REAL_CASES;
  const entry = pickRandom(pool);

  console.log(`\n→ Generating article`);
  console.log(`  Subject: ${entry.subject}`);
  console.log(`  Category: ${entry.category}\n`);

  const message = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 2500,
    messages: [{ role: "user", content: buildPrompt(entry) }],
  });

  const raw = message.content[0].type === "text" ? message.content[0].text.trim() : "";
  if (!raw) throw new Error("Empty response from API");

  // Extract title for slug
  const titleMatch = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m);
  const title = titleMatch ? titleMatch[1].replace(/["']/g, "") : `article-${Date.now()}`;
  const slug = slugify(title);

  const outputDir = path.join(process.cwd(), "content", "articles");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  let filename = `${slug}.md`;
  let counter = 1;
  while (fs.existsSync(path.join(outputDir, filename))) {
    filename = `${slug}-${counter}.md`;
    counter++;
  }

  fs.writeFileSync(path.join(outputDir, filename), raw, "utf-8");

  console.log(`✓ Written: content/articles/${filename}`);
  console.log(`  Title: ${title}`);
  console.log(`  Category: ${entry.category}`);
}

generateArticle().catch((err) => {
  console.error("✗ Generation failed:", err.message);
  process.exit(1);
});
