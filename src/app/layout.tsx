import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "नेपाली किसान - Nepali Kishan",
  description: "AI-powered agricultural app for Nepali farmers with crop recommendations, disease detection, weather alerts, and market prices",
  keywords: ["agriculture", "farming", "nepal", "crop", "disease", "weather", "market", "AI"],
  authors: [{ name: "Nepali Kishan Team" }],
  creator: "Nepali Kishan",
  publisher: "Nepali Kishan",
  formatDetection: { email: false },
  metadataBase: new URL('https://nepalikishan.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ne': '/ne',
      'en': '/en',
    },
  },
  openGraph: {
    title: "नेपाली किसान - Nepali Kishan",
    description: "AI-powered agricultural app for Nepali farmers",
    url: 'https://nepalikishan.com',
    siteName: 'Nepali Kishan',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nepali Kishan - AI Agriculture App',
      },
    ],
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "नेपाली किसान - Nepali Kishan",
    description: "AI-powered agricultural app for Nepali farmers",
    images: ['/twitter-image.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon-192x192.png',
    shortcut: '/icons/icon-96x96.png',
    apple: '/icons/icon-192x192.png',
  },
  themeColor: '#22c55e',
  colorScheme: 'light dark',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ne"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#22c55e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="नेपाली किसान" />
        <meta name="application-name" content="नेपाली किसान" />
        <meta name="msapplication-TileColor" content="#22c55e" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
