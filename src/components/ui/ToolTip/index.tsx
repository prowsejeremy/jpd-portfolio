// Core
import { useEffect, useRef } from "react";

// Styles
import styles from "./styles.module.scss";

// Types
export enum direction {
  TOP = "ToolTipTop",
  BOTTOM = "ToolTipBottom",
  LEFT = "ToolTipLeft",
  RIGHT = "ToolTipRight",
}

interface ToolTipInterface {
  children?: JSX.Element;
  message?: string;
  direction: direction;
  visable: boolean;
}

const ToolTip = ({
  message,
  children,
  direction,
  visable = false,
}: ToolTipInterface) => {
  const ToolTipRef = useRef<HTMLDivElement>(null);

  // Set parent position if not already set.
  // This ensures correct positioning of the tooltip.
  useEffect(() => {
    if (ToolTipRef.current == null) return;
    const parent = ToolTipRef.current.parentNode as HTMLElement;
    const parentStyles = getComputedStyle(parent);
    const currentPosVal = parentStyles.getPropertyValue("position");
    if (parent && currentPosVal == "static") {
      parent.style.position = "relative";
    }
  }, [ToolTipRef.current]);

  return (
    <div
      ref={ToolTipRef}
      className={`${styles.ToolTipMessage} ${styles[direction]} ${
        visable && styles.active
      }`}
    >
      {children || message}
      <span className={styles.ToolTipPointer} />
    </div>
  );
};

export default ToolTip;
