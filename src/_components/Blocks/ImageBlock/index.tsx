// Core
import Image from "next/image";

// Styles
import styles from "./styles.module.scss";

export type ImageType = {
  url: string;
  alt: string;
};

const ImageBlock = ({ image }: { image: ImageType }) => {
  return (
    <div className={styles.ImageBlock}>
      <Image
        className={styles.Image}
        src={image.url}
        alt={image.alt}
        fill={true}
      />
    </div>
  );
};

export default ImageBlock;
