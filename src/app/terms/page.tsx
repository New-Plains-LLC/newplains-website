import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] px-6 py-24 max-w-3xl mx-auto">
      <Link href="/" className="text-[#B87333] hover:underline text-sm mb-8 inline-block">
        ← Back to New Plains
      </Link>
      <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
        Terms & Conditions
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 7, 2026</p>

      <section className="space-y-6 text-base leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using newplains.dev (the "Site"), operated by New Plains LLC ("we," "our," or
            "us"), you agree to these Terms & Conditions. If you do not agree, please do not use the Site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Services Description</h2>
          <p>
            New Plains LLC is an AI innovation studio. The Site provides information about our products and
            services, including Herm.Chat, the Dealer Independence Stack, Parallel Ag Fix, and digital
            products. All services are subject to separate agreements where applicable.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, logos, images, and software — is the
            property of New Plains LLC or its licensors and is protected by United States and international
            copyright laws. Our brand names and logos are trademarks of New Plains LLC.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. User Conduct</h2>
          <p>
            You agree not to use the Site for any unlawful purpose or in violation of these Terms. This
            includes attempting to gain unauthorized access to our systems, submitting false information
            through our contact form, or interfering with the Site's operation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p>
            The Site and its content are provided "as is" without warranties of any kind. New Plains LLC
            shall not be liable for any damages arising from your use of or inability to use the Site,
            including but not limited to direct, indirect, incidental, or consequential damages.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. We are not responsible for the content or
            practices of those sites. Your use of third-party sites is at your own risk.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Oklahoma, without regard to its conflict
            of law provisions. Any disputes shall be resolved in the courts of Grady County, Oklahoma.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be posted on this page
            with an updated date. Your continued use of the Site after changes constitutes acceptance.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
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
