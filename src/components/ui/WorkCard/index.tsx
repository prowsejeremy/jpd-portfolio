"use client";

// Components
import CustomLink from "@/src/components/ui/CustomLink";
import ArrowIcon from "@/src/components/svgs/Arrow";

// Styles
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

  const titleMarkup = (
    <h3 className={styles.WorkTitle}>
      {title}
      <ArrowIcon className={styles.ArrowIcon} />
    </h3>
  );

  return (
    <div className={styles.WorkCard}>
      <p className={styles.WorkYear}>{year}</p>

      {link.type === "internal" ? (
        <CustomLink className={styles.WorkLink} href={link.url}>
          {titleMarkup}
        </CustomLink>
      ) : (
        <a className={styles.WorkLink} href={link.url} target="_blank">
          {titleMarkup}
        </a>
      )}

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
    </div>
  );
};

export default WorkCard;
