"use client";
import { useEffect } from "react";
import { captureFirstTouch } from "@/lib/analytics";

/** Mounted once in the root layout so the landing page is recorded on whatever
 *  page the visitor arrives, not only on pages that render the contact form. */
export default function FirstTouch() {
  useEffect(() => {
    captureFirstTouch();
  }, []);
  return null;
}
