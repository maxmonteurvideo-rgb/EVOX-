import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-loaded",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-mono-loaded",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evox-agency.com"),
  title: "EVOX — Des vidéos publicitaires Meta à l'image de votre marque",
  description:
    "Agence de création Meta Ads premium. Du script au montage final, des créas conçues pour convertir, avec la qualité que votre marque exige.",
  openGraph: {
    title: "EVOX — Des vidéos publicitaires Meta à l'image de votre marque",
    description:
      "Agence de création Meta Ads premium : avatar client, scripts, tournage et montage orientés conversion.",
    url: "https://evox-agency.com",
    siteName: "EVOX",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
