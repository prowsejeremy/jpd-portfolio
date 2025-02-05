// Styles
import styles from "./styles.module.scss";

type ButtonPropTypes = {
  text: string;
  action?: Function;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export default function BasicButton({
  text,
  action,
  type = "button",
}: ButtonPropTypes) {
  return (
    <button
      className={styles.Button}
      onClick={() => action && action()}
      type={type}
    >
      {text}
    </button>
  );
}
