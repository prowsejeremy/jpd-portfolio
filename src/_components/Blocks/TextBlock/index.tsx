// Styles
import styles from "./styles.module.scss";

const TextBlock = ({ content }: { content: string }) => {
  return (
    <div className={styles.TextBlock}>
      <div
        className={styles.TextContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default TextBlock;
