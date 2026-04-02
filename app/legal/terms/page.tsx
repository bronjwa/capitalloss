import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Capitalloss.",
};

export default function TermsPage() {
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
              Terms of Use
            </h1>

            <div className="prose-cl" style={{ maxWidth: "none" }}>
              <p><strong>Last updated: April 1, 2026</strong></p>

              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using the Capitalloss website ("Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.
              </p>

              <h2>Use of Content</h2>
              <p>
                All content published on Capitalloss — including articles, essays, headlines, photography, and design — is protected by copyright and owned by Capitalloss unless otherwise noted.
              </p>
              <p>
                You may share links to articles and quote brief excerpts (up to 150 words) for non-commercial purposes, provided that proper attribution is given to Capitalloss with a link back to the original article.
              </p>
              <p>
                Reproducing full articles, republishing content in any form, or using our content for commercial purposes without written permission is prohibited.
              </p>

              <h2>Prohibited Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Site for any unlawful purpose</li>
                <li>Scrape, crawl, or systematically extract content without permission</li>
                <li>Reproduce or republish content in full without written consent</li>
                <li>Attempt to interfere with the operation or security of the Site</li>
                <li>Use our brand name, logo, or identity in a misleading manner</li>
              </ul>

              <h2>Editorial Independence</h2>
              <p>
                Capitalloss maintains full editorial independence. Our content is not sponsored, commissioned, or influenced by the individuals or companies we write about. If any content is produced in partnership with a third party, it will be clearly labeled.
              </p>

              <h2>Disclaimers and Limitation of Liability</h2>
              <p>
                The Site and its content are provided "as is" without warranties of any kind. Capitalloss is not liable for any damages arising from your use of or reliance on content published on this Site.
              </p>
              <p>
                We make reasonable efforts to ensure accuracy but do not guarantee that all information is current, complete, or error-free. See our Editorial Disclaimer for more detail.
              </p>

              <h2>External Links</h2>
              <p>
                The Site may contain links to third-party websites. These links are provided for reference only. Capitalloss is not responsible for the content or practices of any linked site.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Continued use of the Site following any changes constitutes acceptance of the updated Terms.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of the United States. Any disputes shall be resolved in the appropriate courts of jurisdiction.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these Terms: <strong>editorial@capitalloss.co</strong>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
