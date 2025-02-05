"use client";

import CustomLink from "@/src/_components/ui/CustomLink";

import styles from "./styles.module.scss";

interface CardProps {
  title: string;
  roles: string[];
  tech: string[];
  year: string;
  link: { url: string; type: string; target: string };
}

const WorkCard = ({ card }: { card: CardProps }) => {
  const { title, roles, tech, year, link } = card;

  const CardInner = (
    <>
      <p className={styles.WorkYear}>{year}</p>
      <h3
        className={styles.WorkTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div className={styles.WorkDetailsWrapper}>
        <div className={styles.WorkDetailsColumn}>
          <h3>ROLES</h3>
          <ul>
            {roles.map((r: string, k: number) => (
              <li key={k}>{r}</li>
            ))}
          </ul>
        </div>
        <div className={styles.WorkDetailsColumn}>
          <h3>TECHNOLOGY</h3>
          <ul>
            {tech.map((t: string, k: number) => (
              <li key={k}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );

  return link.type === "internal" ? (
    <CustomLink className={styles.WorkCard} href={link.url}>
      {CardInner}
    </CustomLink>
  ) : (
    <a className={styles.WorkCard} href={link.url} target="_blank">
      {CardInner}
    </a>
  );
};

export default WorkCard;
