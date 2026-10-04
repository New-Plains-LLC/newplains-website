"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

/**
 * Fires a GA4/GTM event whenever a visitor clicks a mailto: link anywhere on
 * the site. This closes the attribution loop for the AI-audit funnel: pages
 * convert via `mailto:info@newplains.dev?subject=AI%20Audit...`, which never
 * hits the server, so without this event GA4 can see the page visit but not
 * the booking intent. The clicked href is passed as a param so different
 * mailto CTAs (audit / training / scope / RFQ) are distinguishable in GA4.
 *
 * GA4 config tag should map `event` -> custom event `contact_email_click`
 * with parameter `mailto_target`. Nothing else uses these names.
 */
declare global {
  interface Window {
    __mailtoListenerAttached?: boolean;
  }
}

export default function MailtoTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.__mailtoListenerAttached) return;
    window.__mailtoListenerAttached = true;

    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.(
        'a[href^="mailto:"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "mailto:unknown";
      const subject = (() => {
        try {
          return new URL(href).searchParams.get("subject") ?? "";
        } catch {
          return "";
        }
      })();
      sendGTMEvent({
        event: "contact_email_click",
        mailto_target: href,
        mailto_subject: subject,
        page_path: pathname,
      });
    };

    // Click-level listener (delegated) so it covers every current and future
    // mailto anchor without touching each component.
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
      window.__mailtoListenerAttached = false;
    };
  }, [pathname]);

  return null;
}
