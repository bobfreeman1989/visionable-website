"use client";
import type { AnchorHTMLAttributes } from "react";
import { trackEvent } from "@/lib/analytics";

const PHONE_HREF = "tel:+15107555616";

interface PhoneLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** Where the link sits on the site, sent with the click_to_call event. */
  location: string;
}

export default function PhoneLink({ location, onClick, ...props }: PhoneLinkProps) {
  return (
    <a
      {...props}
      href={PHONE_HREF}
      onClick={(event) => {
        trackEvent("click_to_call", { location });
        onClick?.(event);
      }}
    />
  );
}
