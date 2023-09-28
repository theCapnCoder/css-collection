import styles from "./styles.module.scss";

const cards = [
  {
    title: "Service One",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita sequi quam error sunt! In.",
  },
  {
    title: "Service Two",
    text: "Lorem ipsum dolor sit amet text one new and what consectetur adipisicing elit. Dolorem expedita sequi quam error sunt! In.",
  },
  {
    title: "Service Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita sequi quam error sunt! In.",
  },
];

const CoolHoverEffects = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoolHoverEffects;
