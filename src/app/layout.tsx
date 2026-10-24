import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Chauhan - AI/ML Engineer & Full-Stack Developer",
  description: "Portfolio of Vaibhav Chauhan, a passionate AI/ML Engineer and Full-Stack Developer specializing in building intelligent systems and scalable web applications.",
  keywords: [
    "Vaibhav Chauhan",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Artificial Intelligence",
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Web Development"
  ],
  authors: [{ name: "Vaibhav Chauhan" }],
  creator: "Vaibhav Chauhan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaibhav-chauhan-portfolio.vercel.app",
    title: "Vaibhav Chauhan - AI/ML Engineer & Full-Stack Developer",
    description: "Portfolio showcasing AI/ML projects and full-stack development work",
    siteName: "Vaibhav Chauhan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Chauhan - AI/ML Engineer & Full-Stack Developer",
    description: "Portfolio showcasing AI/ML projects and full-stack development work",
    creator: "@vaibhav_chauhan",
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
    "google-adsense-account": "ca-pub-4730926831055611",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="google-adsense-account" content="ca-pub-4730926831055611" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full max-w-full overflow-x-hidden`}
      >
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4730926831055611"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
