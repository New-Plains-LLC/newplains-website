import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] px-6 py-24 max-w-3xl mx-auto">
      <Link href="/" className="text-[#B87333] hover:underline text-sm mb-8 inline-block">
        ← Back to New Plains
      </Link>
      <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 7, 2026</p>

      <section className="space-y-6 text-base leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            New Plains LLC ("we," "our," or "us") collects minimal information. When you use our contact form,
            we collect your name, email address, and any message content you provide. Our analytics tools
            (Google Tag Manager, Google Analytics) may collect anonymized usage data including page views,
            browser type, and referring URLs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
          <p>
            Contact form submissions are used solely to respond to your inquiry. Analytics data helps us
            understand how visitors use our site. We do not sell, rent, or share your personal information
            with third parties for their marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Cookies</h2>
          <p>
            Our site uses essential cookies for functionality and analytics cookies through Google services.
            You can disable cookies in your browser settings. Our AI chatbot widget (Herm.Chat) may set
            functional cookies for session management.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
          <p>
            We use the following third-party services that may collect data according to their own privacy
            policies:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Google Analytics (analytics)</li>
            <li>Formspree (contact form processing)</li>
            <li>Herm.Chat (AI chatbot widget)</li>
            <li>Vercel (hosting)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
          <p>
            Contact form submissions are retained for as long as needed to address your inquiry. Analytics
            data is retained per Google Analytics' default retention settings (26 months for user-level data).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information by contacting
            us at the email address below. We will respond within 30 days.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
          <p>
            New Plains LLC<br />
            Email: info@newplains.dev<br />
            Website: https://newplains.dev
          </p>
        </div>
      </section>
    </main>
  );
}
