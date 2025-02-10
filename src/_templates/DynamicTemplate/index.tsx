"use client";

// Components
import PageHero from "@/src/_components/globals/PageHero";
import PageSections from "@/src/_components/block/PageSections";

// Styles
import styles from "./styles.module.scss";

const DynamicTemplate = ({ page }: { page: any }) => {
  const { displayTitle, coverImage, coverVideo, pageSections } = page;

  return (
    <div className={styles.DynamicPageContent}>
      <PageHero title={displayTitle} image={coverImage} videoUrl={coverVideo} />
      <div className={styles.DynamicPageDetails}>
        <PageSections sections={pageSections} />
      </div>
    </div>
  );
};

export default DynamicTemplate;
