"use client";

// import { usePathname } from 'next/navigation'
// import { AnimatePresence } from 'framer-motion'

// const pathname = usePathname()
// <AnimatePresence mode='wait' onExitComplete={() => {window?.scrollTo(0, 0)}}>
// <PageTransition key={pathname}>
// </PageTransition>
// </AnimatePresence>

import { GlobalStateProvider } from "src/_lib/Store/index";

import PageTransition from "@/src/_components/globals/PageTransition";
import PageWrapper from "@/src/_components/globals/PageWrapper";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalStateProvider>
      <PageTransition>
        <PageWrapper>{children}</PageWrapper>
      </PageTransition>
    </GlobalStateProvider>
  );
};

export default AppWrapper;
