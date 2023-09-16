import styles from "./style.module.scss";
import img1 from "./img/img1.avif";
import img2 from "./img/img2.avif";
import img3 from "./img/img3.avif";
import img4 from "./img/img4.avif";
import img5 from "./img/img5.avif";
import img6 from "./img/img6.avif";

const cards = [
  {
    img: img1,
    title: "Title Goes here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates.",
  },
  {
    img: img2,
    title: "Title Goes here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates.",
  },
  {
    img: img3,
    title: "Title Goes here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates.",
  },
  {
    img: img4,
    title: "Title Goes here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates.",
  },
  {
    img: img5,
    title: "Title Goes here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates.",
  },
  {
    img: img6,
    title: "Title Goes here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptates.",
  },
];

export const FlipCard = () => {
  return (
    <section className={styles.container}>
      {cards.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imgBox}>
            <img src={item.img} alt="" />
          </div>
          <div className={styles.details}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
