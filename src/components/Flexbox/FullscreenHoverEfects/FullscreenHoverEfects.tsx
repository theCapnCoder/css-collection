import styles from "./style.module.scss";

export const FullscreenHoverEfects = () => {
  const items = ["One", "Two", "Three", "Four", "Five"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={index} className={styles.box}>
            <h2>
              <span>{item}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
