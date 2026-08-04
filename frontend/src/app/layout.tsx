import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { LocationProvider } from "@/providers/LocationProvider";
import "./globals.css";
import { Toaster } from "sonner";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

export const metadata: Metadata = {
  title: "EarthPulse",
  description: "real-time Earth Monitoring Platform",
  icons: {
    icon: "/images/earthpulse_favicon3.png", // or /favicon.png
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
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocationProvider>
          {children}
        </LocationProvider>
        <Toaster
            position="top-right"
            richColors
            closeButton
        />
      </body>
    </html>
  );
}
