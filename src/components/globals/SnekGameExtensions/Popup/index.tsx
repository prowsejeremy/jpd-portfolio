// Core
import { motion } from "framer-motion";

// Styles
import styles from "./styles.module.scss";

export default function Popup({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className={styles.PopupWrapper}
      key={`PopupWrapper`}
      initial={{ opacity: 0, translateY: "10%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      exit={{ opacity: 0, translateY: "10%" }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
