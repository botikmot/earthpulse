import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { LocationProvider } from "@/providers/LocationProvider";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/ThemeProvider";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

export const metadata: Metadata = {
  title: "ERRION",
  description: "Understanding Earth's Signals.",
  icons: {
    icon: "/images/earthpulse_favicon3.png", // or /favicon.png
  },

  openGraph: {
      title: "ERRION",
      description: "Understanding Earth's Signals.",
      images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LocationProvider>
            {children}
          </LocationProvider>
        </ThemeProvider>
        <Toaster
            position="top-right"
            richColors
            closeButton
        />
      </body>
    </html>
  );
}
