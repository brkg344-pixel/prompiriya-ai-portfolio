import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Noto_Sans_Thai, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const notoThai = Noto_Sans_Thai({ subsets: ["thai", "latin"], variable: "--font-noto-thai" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080A12",
};

export const metadata: Metadata = {
  title: "Prompiriya Phetyangphul (Boom) — AI & Digital Experience Portfolio | Silpakorn ICT",
  description:
    "Official University Admission Portfolio of Mr. Prompiriya Phetyangphul (Boom), Sa Kaeo School TOP STAR Program. Candidate for Artificial Intelligence for Digital Experience Technology, Faculty of ICT, Silpakorn University (TCAS70).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="th"
      className={`dark scroll-smooth ${inter.variable} ${jakarta.variable} ${notoThai.variable} ${jetbrains.variable}`}
    >
      <body className="bg-canvas text-ink font-sans antialiased min-h-screen">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
