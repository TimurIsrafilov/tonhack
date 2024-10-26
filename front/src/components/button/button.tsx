import styles from "./button.module.css";

type TButtonProps = {
  title: string;
};

function Button({ title }: TButtonProps): React.JSX.Element {
  return (
    <button className={styles.button}>
      <h1 className={styles.button__title}>{title}</h1>
    </button>
  );
}

export default Button;
