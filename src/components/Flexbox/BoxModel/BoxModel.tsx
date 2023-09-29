import styles from "./styles.module.scss";
import food1 from "./img/food1.jpg";
import food2 from "./img/food2.jpeg";
import food3 from "./img/food3.jpeg";
import food4 from "./img/food4.jpg";

const cards = [
  {
    img: food1,
    title: "Food One",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: food2,
    title: "Food Two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: food3,
    title: "Food Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: food4,
    title: "Food Four",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const BoxModel = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imgBox}>
              <img src={card.img} alt="food" />
            </div>
            <div className={styles.content}>
              <div>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxModel;
