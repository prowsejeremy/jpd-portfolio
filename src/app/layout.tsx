import { DM_Sans, Teko } from "next/font/google";

import AppWrapper from "@/src/_components/globals/AppWrapper";

import "src/_styles/globals.scss";

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
