import type { Metadata } from "next";
import { MarketingContent } from "./marketing-content";

export const metadata: Metadata = {
  title: "Digital Marketing at SKIZEN",
  description:
    "Experience as Director at SKIZEN: client acquisition, direct pitching, Meta & Google Ads, content strategy, and business website development.",
  alternates: {
    canonical: "/marketing",
  },
  openGraph: {
    title: "Digital Marketing at SKIZEN | Sai Kumar Thota",
    description:
      "Experience as Director at SKIZEN: client acquisition, direct pitching, Meta & Google Ads, content strategy, and business website development.",
    url: "https://saikumarthota.live/marketing",
    siteName: "Sai Kumar Thota",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "/assets/developer-avatar.svg",
        width: 800,
        height: 800,
        alt: "Sai Kumar Thota — Digital Marketing at SKIZEN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing at SKIZEN | Sai Kumar Thota",
    description:
      "Experience as Director at SKIZEN: client acquisition, direct pitching, Meta & Google Ads, content strategy, and business website development.",
    creator: "@SAIKUMAR039",
    images: ["/assets/developer-avatar.svg"],
  },
};

export default function MarketingPage() {
  return <MarketingContent />;
}
