import styles from "./style.module.scss";

const cards = [
  {
    process: "90",
    title: "HTML",
  },
  {
    process: "82",
    title: "CSS",
  },
  {
    process: "65",
    title: "JS",
  },
];

export const CircularProgress = () => {
  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        {cards.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.box}>
              <div>
                <div className={styles.percent}>
                  <svg>
                    <circle cx="70" cy="70" r="70" />
                    <circle cx="70" cy="70" r="70" />
                  </svg>
                  <div className={styles.number}>
                    <h2>
                      {item.process}
                      <span>%</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text}>{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
