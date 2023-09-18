import styles from "./style.module.scss";

export const RotatingImage = () => {
  return (
    <div className={styles.box}>
      <span style="--i=1;"></span>
    </div>
  );
};
