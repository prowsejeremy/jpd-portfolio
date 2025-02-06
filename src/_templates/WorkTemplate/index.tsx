"use client";

// Components
import WorkCard from "@/src/_components/ui/WorkCard";

// Styles
import styles from "./styles.module.scss";

const WorkTemplate = ({ page }: { page: any }) => {
  const { workItems } = page;

  return (
    <div className={styles.WorkPageContent}>
      {workItems && (
        <div className={styles.WorkItems}>
          {workItems.map((item: any, key: number) => {
            return <WorkCard card={item} key={key} />;
          })}
        </div>
      )}
    </div>
  );
};

export default WorkTemplate;
