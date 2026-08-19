import type { Metadata } from "next";
import { Eagle_Lake, Figtree, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const display = Eagle_Lake({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hindi = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "REVORA SPACES | Architecture, Construction & Property Care",
  description:
    "End-to-end architecture, construction, renovation, repairs, and property maintenance for homes, offices, and commercial spaces through one clear partner.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${hindi.variable} h-full antialiased`}
    >
      <body className=" flex min-h-full flex-col font-body text-ink">
        {children}
      </body>
    </html>
  );
}
