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

const siteUrl = "https://saikumarthota.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sai Kumar Thota | Software Engineer | Python React Node.js",
    template: "%s | Sai Kumar Thota",
  },
  description:
    "Sai Kumar Thota is a 2026 Computer Science graduate from SR University building software applications, REST APIs and practical AI systems using Python, React.js, Node.js, FastAPI and SQL.",
  applicationName: "Sai Kumar Thota Portfolio",
  keywords: [
    "Sai Kumar Thota",
    "Software Engineer",
    "Python Developer",
    "React.js Developer",
    "Node.js Developer",
    "FastAPI",
    "SQL",
    "REST APIs",
    "PostgreSQL",
    "Full Stack Developer",
    "SR University",
    "Tata Technologies InnoVent Finalist",
    "VisionFame",
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
    title: "Sai Kumar Thota | Software Engineer | Python React Node.js",
    description:
      "Sai Kumar Thota is a 2026 Computer Science graduate from SR University building software applications, REST APIs and practical AI systems using Python, React.js, Node.js, FastAPI and SQL.",
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
    title: "Sai Kumar Thota | Software Engineer | Python React Node.js",
    description:
      "Sai Kumar Thota is a 2026 Computer Science graduate from SR University building software applications, REST APIs and practical AI systems using Python, React.js, Node.js, FastAPI and SQL.",
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
        "Computer Science graduate from SR University building software applications, REST APIs and practical AI systems using Python, React.js, Node.js, FastAPI and SQL.",
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
      worksFor: {
        "@type": "Organization",
        name: "VisionFame Pvt. Ltd.",
      },
      knowsAbout: [
        "Software Engineering",
        "Python",
        "React.js",
        "Node.js",
        "FastAPI",
        "SQL",
        "PostgreSQL",
        "MySQL",
        "REST APIs",
        "Data Structures",
        "Algorithms",
        "Agile",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "AWS Academy Graduate — Cloud Architecting",
          recognizedBy: {
            "@type": "Organization",
            name: "Amazon Web Services",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "AWS Academy Graduate — Cloud Foundations",
          recognizedBy: {
            "@type": "Organization",
            name: "Amazon Web Services",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Oracle Cloud Infrastructure (OCI) Administration — Certified",
          recognizedBy: {
            "@type": "Organization",
            name: "Oracle",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "ServiceNow Developer Virtual Internship",
          recognizedBy: {
            "@type": "Organization",
            name: "ServiceNow & AICTE",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Sai Kumar Thota | Software Engineer | Python React Node.js",
      description:
        "Sai Kumar Thota is a 2026 Computer Science graduate from SR University building software applications, REST APIs and practical AI systems using Python, React.js, Node.js, FastAPI and SQL.",
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
