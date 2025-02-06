"use client";

// Core
import { usePathname } from "next/navigation";
// import Link from 'next/link'

// Components
import CustomLink from "@/src/_components/ui/CustomLink";

// Styles
import styles from "./styles.module.scss";

export default function Navbar() {
  let pathname = usePathname();

  return (
    <div className={styles.NavBar}>
      <div className={styles.NavItems}>
        <CustomLink
          className={`
            ${styles.NavLink} 
            NavLink 
            ${pathname == "/" && styles.active}
          `}
          href="/"
        >
          HOME
        </CustomLink>
        <CustomLink
          className={`
            ${styles.NavLink} 
            NavLink 
            ${pathname.includes("work") && styles.active}
          `}
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
