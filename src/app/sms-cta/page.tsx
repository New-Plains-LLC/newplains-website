import Link from "next/link";

export default function SmsCtaPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] px-6 py-24 max-w-3xl mx-auto">
      <Link href="/" className="text-[#B87333] hover:underline text-sm mb-8 inline-block">
        ← Back to New Plains
      </Link>
      <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
        SMS Program Terms
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 14, 2026</p>

      <section className="space-y-8 text-base leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold mb-2">Program Description</h2>
          <p>
            New Plains LLC operates an SMS messaging service to communicate operational updates,
            alerts, and business notifications related to New Plains LLC, its affiliates, and
            service offerings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Call to Action — How to Opt In</h2>
          <p className="mb-3">
            To subscribe to SMS messages from New Plains LLC, reply{" "}
            <strong className="text-[#B87333]">START</strong> to a message thread initiated by
            New Plains LLC, or provide your phone number and consent via our website contact form.
          </p>
          <p>
            By opting in, you agree to receive messages from New Plains LLC. Message frequency
            varies. You may receive between 1–5 messages per week depending on active projects
            and updates.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Sample Message Content</h2>
          <p className="mb-3">
            Messages may include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Operational alerts and status updates</li>
            <li>Project milestone notifications</li>
            <li>Response to inquiries submitted via website contact forms</li>
            <li>Business correspondence related to New Plains LLC services</li>
          </ul>
          <p className="mt-3 text-sm text-gray-500 italic">
            Example: &quot;New Plains LLC update: Your inquiry has been received. A team member will
            follow up within 1 business day. Reply STOP to unsubscribe.&quot;
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">How to Opt Out</h2>
          <p>
            Reply <strong className="text-[#B87333]">STOP</strong> at any time to cancel your
            subscription and stop receiving SMS messages from New Plains LLC. You will receive a
            single confirmation message confirming your opt-out request.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">How to Get Help</h2>
          <p>
            Reply <strong className="text-[#B87333]">HELP</strong> for assistance, or email us at{" "}
            <a href="mailto:info@newplains.dev" className="text-[#B87333] hover:underline">
              info@newplains.dev
            </a>
            . We will respond to your request promptly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Message Frequency &amp; Costs</h2>
          <p>
            Message frequency varies based on current business activity and may range from 1–5
            messages per week. Standard message and data rates may apply. You are not required to
            consent to SMS communications as a condition of purchasing any goods or services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Carrier Disclaimer</h2>
          <p className="text-sm text-gray-600">
            Supported carriers: AT&amp;T, Verizon Wireless, T-Mobile, U.S. Cellular, Boost Mobile,
            MetroPCS, and others. Carriers are not liable for delayed or undelivered messages.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Privacy</h2>
          <p>
            Your phone number and message data are used solely for the SMS program described above.
            We do not sell or share your personal information with third parties for their marketing
            purposes. See our{" "}
            <Link href="/privacy" className="text-[#B87333] hover:underline">
              Privacy Policy
            </Link>{" "}
            for full details.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            New Plains LLC<br />
            Email: <a href="mailto:info@newplains.dev" className="text-[#B87333] hover:underline">info@newplains.dev</a><br />
            Website: <a href="https://newplains.dev" className="text-[#B87333] hover:underline">https://newplains.dev</a>
          </p>
        </div>

      </section>
    </main>
  );
}