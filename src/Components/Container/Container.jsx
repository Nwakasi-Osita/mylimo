import styles from "./Container.module.css";

export const Container = (props) => {
  const { children, className } = props;

  return (
    <div className={`${styles.container} ${className || ""}`}>{children}</div>
  );
};
