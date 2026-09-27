import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { PortfolioProvider } from "@/context/portfolio-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://saikumarthota.live";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sai Kumar Thota — Software Engineer",
    template: "%s | Sai Kumar Thota",
  },
  description:
    "Software engineer building thoughtful web applications and practical AI-powered tools. Experienced in React, Next.js, Python, FastAPI, and cloud deployments. Based in Hyderabad, India.",
  applicationName: "Sai Kumar Thota Portfolio",
  keywords: [
    "Sai Kumar Thota",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer Hyderabad",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "FastAPI",
    "TypeScript",
    "Applied AI",
    "Hyderabad Software Engineer",
    "Telangana Software Engineer",
    "India Software Engineer",
    "SKIZEN",
    "Digital Marketing",
  ],
  authors: [{ name: "Sai Kumar Thota", url: siteUrl }],
  creator: "Sai Kumar Thota",
  publisher: "Sai Kumar Thota",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sai Kumar Thota — Software Engineer",
    description:
      "Software engineer building thoughtful web applications and practical AI-powered tools. Based in Hyderabad, India.",
    url: siteUrl,
    siteName: "Sai Kumar Thota",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/developer-avatar.svg",
        width: 800,
        height: 800,
        alt: "Sai Kumar Thota — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Kumar Thota — Software Engineer",
    description:
      "Software engineer building thoughtful web applications and practical AI-powered tools. Based in Hyderabad, India.",
    creator: "@SAIKUMAR039",
    images: ["/assets/developer-avatar.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.385044;78.486671",
    ICBM: "17.385044, 78.486671",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Sai Kumar Thota",
      givenName: "Sai Kumar",
      familyName: "Thota",
      jobTitle: "Software Engineer",
      description:
        "Software engineer building thoughtful web applications and practical AI-powered tools.",
      url: siteUrl,
      image: `${siteUrl}/assets/developer-avatar.svg`,
      sameAs: [
        "https://github.com/SAIKUMAR039",
        "https://www.linkedin.com/in/sai-kumar-thota-101764252/",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "SR University",
      },
      knowsAbout: [
        "Computer Science",
        "Software Engineering",
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Machine Learning",
        "Digital Marketing",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Sai Kumar Thota — Software Engineer",
      description:
        "Portfolio of Sai Kumar Thota, Software Engineer based in Hyderabad, India.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <PortfolioProvider>
            {children}
            <Toaster />
          </PortfolioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
