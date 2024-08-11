import styles from "./Button.module.css";

export default function Button({ size, type, children, onClick }) {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${styles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
