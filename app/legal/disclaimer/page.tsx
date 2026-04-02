import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Editorial Disclaimer",
  description: "Editorial disclaimer for Capitalloss.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1, paddingTop: "60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(3rem, 7vw, 5rem) 2rem 6rem" }}>
          <div style={{ maxWidth: "680px" }}>
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>Legal</p>
            <h1 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "#ede8df",
              letterSpacing: "-0.025em",
              lineHeight: 1.0,
              marginBottom: "3rem",
            }}>
              Editorial Disclaimer
            </h1>

            <div className="prose-cl" style={{ maxWidth: "none" }}>
              <p><strong>Last updated: April 1, 2026</strong></p>

              <h2>Purpose and Nature of Content</h2>
              <p>
                Capitalloss is an independent editorial publication. All content published on this website — including articles, essays, case studies, and editorial commentary — is intended solely for informational, educational, and editorial purposes.
              </p>
              <p>
                Nothing on this site constitutes financial, legal, business, or professional advice of any kind. Readers should not act on any information published here without seeking qualified professional counsel appropriate to their specific circumstances.
              </p>

              <h2>Editorial Standards and Source Verification</h2>
              <p>
                Capitalloss draws upon publicly available sources including published interviews, books, journalistic reporting, podcasts, court records, regulatory filings, and other documented materials. Where sources are cited, we have made reasonable efforts to verify their accuracy and relevance.
              </p>
              <p>
                Some articles may synthesize multiple documented accounts into a narrative form. In such cases, we note the sources used and encourage readers to consult primary materials directly. Capitalloss does not claim to have independently verified every detail contained in third-party sources.
              </p>

              <h2>Individuals and Companies Referenced</h2>
              <p>
                Articles that reference real individuals, companies, or organizations do so based on publicly reported information. Capitalloss does not intend to defame, harass, or misrepresent any person or entity.
              </p>
              <p>
                If you believe content on this site contains factual inaccuracies or mischaracterizations regarding yourself or your organization, please contact us at <strong>editorial@capitalloss.co</strong>. We are committed to corrections when warranted.
              </p>

              <h2>No Endorsement</h2>
              <p>
                Reference to or citation of any person, company, product, publication, or service does not constitute an endorsement by Capitalloss. External links are provided for context only.
              </p>

              <h2>Forward-Looking Statements</h2>
              <p>
                Any discussion of business outcomes, financial results, or market conditions reflects historical or documented information at the time of writing. Capitalloss makes no representations or warranties about future outcomes.
              </p>

              <h2>Contact</h2>
              <p>
                For editorial inquiries, corrections, or concerns: <strong>editorial@capitalloss.co</strong>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
