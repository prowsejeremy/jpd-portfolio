// Components
import AppWrapper from "@/src/_components/globals/AppWrapper";

// Styles
import "src/_styles/globals.scss";
import { Metadata } from "next";

// Fonts
import { DM_Sans, Teko } from "next/font/google";

const mainFont = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "900"],
  variable: "--font-main",
});

const gameFont = Teko({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-game",
});

export const metadata: Metadata = {
  title: "JPD",
  description: "Jeremy Prowse Digital - Design & Development",
  openGraph: {
    images: ["/images/share.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} ${gameFont.variable}`}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
