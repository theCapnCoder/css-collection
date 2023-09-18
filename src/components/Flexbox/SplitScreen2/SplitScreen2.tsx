import styles from "./style.module.scss";

const heroes = [
  {
    title: "Iron Man",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptatem optio nam suscipit. Sint temporibus ad ipsam ullam vel provident impedit quia rerum, praesentium, nostrum itaque mollitia quam similique! Voluptate obcaecati magni cupiditate ea. Quod fugiat sed suscipit consequuntur dolorem consectetur molestiae, facilis, nulla soluta animi maiores quidem non voluptas beatae aperiam expedita ex ducimus aliquid? Labore laborum maiores dolores.",
  },
  {
    title: "Captain America",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    title: "Tor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
];

export const SplitScreen2 = () => {
  return (
    <section className={styles.split}>
      {heroes.map((item, index) => (
        <div key={index} className={styles.screen}>
          <div className={styles.content}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
