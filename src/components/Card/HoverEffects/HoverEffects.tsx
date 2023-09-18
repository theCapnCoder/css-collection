import styles from "./style.module.scss";
import img1 from "./img/img1.avif";
import img2 from "./img/img2.avif";
import img3 from "./img/img3.avif";

const cards = [
  {
    img: img1,
    title: "Card One",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum, vitae harum quidem voluptates eius, nisi nemo exercitationem eaque maxime officia iste ullam sed quam",
  },
  {
    img: img2,
    title: "Card Two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum, vitae harum quidem voluptates eius, nisi nemo exercitationem eaque maxime officia iste ullam sed quam",
  },
  {
    img: img3,
    title: "Card Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum, vitae harum quidem voluptates eius, nisi nemo exercitationem eaque maxime officia iste ullam sed quam",
  },
];

export const HoverEffects = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {cards.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imgBox}>
              <img src={item.img} alt="" />
            </div>
            <div className={styles.content}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
