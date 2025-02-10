// Styles
import styles from "./styles.module.scss";

const VideoBlock = ({ src }: { src: string }) => {
  return (
    <div className={styles.VideoWrapper}>
      <video className={styles.Video} autoPlay muted loop controls={false}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBlock;
