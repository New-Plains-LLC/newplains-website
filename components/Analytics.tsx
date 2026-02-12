"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    sendGTMEvent({ event: "page_view", page: pathname });
  }, [pathname]);

  return null;
}
