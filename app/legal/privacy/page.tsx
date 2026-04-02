import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Capitalloss.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>

            <div className="prose-cl" style={{ maxWidth: "none" }}>
              <p><strong>Last updated: April 1, 2026</strong></p>

              <h2>Overview</h2>
              <p>
                Capitalloss ("we," "our," or "us") operates the website at capitalloss.vercel.app and any associated domains. This Privacy Policy explains how we handle information in connection with your use of this site.
              </p>
              <p>
                This is an editorial website. We do not sell products, process payments, or require account creation to read content.
              </p>

              <h2>Information We Collect</h2>
              <p>
                <strong>Automatically collected data:</strong> Like most websites, our hosting infrastructure (Vercel) may collect standard server log data including IP addresses, browser type, pages visited, and referring URLs. This data is used for site performance and security purposes only.
              </p>
              <p>
                <strong>No account data:</strong> We do not require registration or account creation. We do not collect names, email addresses, or personal information unless you voluntarily contact us.
              </p>
              <p>
                <strong>Contact submissions:</strong> If you email us directly, we retain that correspondence for the purposes of responding to your inquiry.
              </p>

              <h2>Cookies</h2>
              <p>
                This site may use minimal technical cookies required for site functionality. We do not use advertising cookies, tracking pixels, or third-party analytics that profile individual users.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                This website is hosted on Vercel. Please refer to Vercel's privacy policy for information on their data practices. We do not integrate third-party advertising networks or social media tracking tools.
              </p>

              <h2>Data Retention</h2>
              <p>
                Server log data is retained according to our hosting provider's policies. Contact correspondence is retained for as long as necessary to address your inquiry.
              </p>

              <h2>Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have rights to access, correct, or delete personal data we hold about you. To exercise these rights, contact us at <strong>editorial@capitalloss.co</strong>.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the site after any changes constitutes acceptance.
              </p>

              <h2>Contact</h2>
              <p>
                Privacy questions: <strong>editorial@capitalloss.co</strong>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
