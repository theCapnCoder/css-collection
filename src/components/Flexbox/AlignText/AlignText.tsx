import clsx from "clsx";

import styles from "./styles.module.scss";

const AlignText = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={clsx(styles.box, styles.topLeft)}>Top Left</div>
        <div className={clsx(styles.box, styles.topCenter)}>Top Center</div>
        <div className={clsx(styles.box, styles.topRight)}>Top Right</div>

        <div className={clsx(styles.box, styles.centerLeft)}>Center Left</div>
        <div className={clsx(styles.box, styles.centerCenter)}>Center Center</div>
        <div className={clsx(styles.box, styles.centerRight)}>Center Right</div>

        <div className={clsx(styles.box, styles.bottomLeft)}>Bottom Left</div>
        <div className={clsx(styles.box, styles.bottomCenter)}>
          Bottom Center
        </div>
        <div className={clsx(styles.box, styles.bottomRight)}>Bottom Right</div>
      </div>
    </div>
  );
};

export default AlignText;
