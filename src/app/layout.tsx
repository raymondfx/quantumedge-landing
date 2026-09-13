import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import ContactModalProvider from "@/components/ContactModalProvider";
import "./globals.css";

// Headings — matches the reference theme's "Inter Tight" heading font exactly.
const interTight = Inter_Tight({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Buttons, nav, small UI labels — the reference theme's plain "Inter" (distinct from
// its Helvetica body copy and Inter Tight headings).
const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Quantumedge Technologies Limited | Enterprise Software & AI Engineering",
  description:
    "Nairobi-based enterprise software and IT consultancy specializing in B2B business automation, enterprise AI integrations, and custom software systems for East Africa's growing enterprises.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy">
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
