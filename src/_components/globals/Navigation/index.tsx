// import Link from 'next/link'
"use client";

import { usePathname } from "next/navigation";

import { useGlobalState } from "src/_lib/Store";

import CustomLink from "@/src/_components/ui/CustomLink";

import styles from "./styles.module.scss";

export default function Navbar() {
  const { state } = useGlobalState();

  let pathname = usePathname();

  return (
    <div
      className={`${styles.NavBar} ${styles[`pageTheme-${state.pageTheme}`]}`}
    >
      <div className={styles.NavItems}>
        <CustomLink
          className={`${styles.NavLink} ${pathname == "/" && styles.active}`}
          href="/"
        >
          HOME
        </CustomLink>
        <CustomLink
          className={`${styles.NavLink} ${
            pathname.includes("work") && styles.active
          }`}
          href="/work"
        >
          WORK
        </CustomLink>

        {/* <Link className={NavLink} href='/' scroll={false}>HOME</Link> */}
        {/* <Link className={NavLink} href='/work' scroll={false}>WORK</Link> */}
      </div>
    </div>
  );
}
