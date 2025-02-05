// Core
import Image from "next/image";

// Components
import VideoBlock from "src/_components/Blocks/VideoBlock";

// Styles
import styles from "./styles.module.scss";

export default function PageHero({
  title,
  videoUrl,
  image,
}: {
  title: string;
  videoUrl: string;
  image: { url: string; alt: string };
}) {
  return (
    <div className={styles.PageHero}>
      <h1 className={styles.PageTitle}>{title}</h1>
      <div className={styles.HeroBackgroundMedia}>
        {image?.url && (
          <Image
            className={styles.HeroImage}
            src={image.url}
            alt={image.alt}
            fill={true}
            priority
          />
        )}
        {videoUrl && <VideoBlock src={videoUrl} />}
      </div>
    </div>
  );
}
