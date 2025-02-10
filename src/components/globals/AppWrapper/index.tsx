"use client";

// import { usePathname } from 'next/navigation'
// import { AnimatePresence } from 'framer-motion'

// const pathname = usePathname()
// <AnimatePresence mode='wait' onExitComplete={() => {window?.scrollTo(0, 0)}}>
// <PageTransition key={pathname}>
// </PageTransition>
// </AnimatePresence>

import { GlobalStateProvider } from "@/src/lib/Store/index";

import PageTransition from "@/src/components/globals/PageTransition";
import PageWrapper from "@/src/components/globals/PageWrapper";

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
