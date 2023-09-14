import styles from "./style.module.scss";

export const HoverEffects = () => {
  const items = [
    "Box one",
    "Box two",
    "Box three",
    "Box four",
    "Box five",
    "Box six",
    "Box seven",
    "Box eight",
  ];

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={index} className={styles.box}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
