import styles from "./style.module.scss";
import phone1 from "./img/phone1.avif";
import phone2 from "./img/phone2.avif";
import phone3 from "./img/phone3.avif";

const cards = [
  {
    img: phone1,
    title: "Post title One",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita sequi quam error sunt! In.",
  },
  {
    img: phone2,
    title: "Post title Two",
    text: "Lorem ipsum dolor sit amet text one new and what consectetur adipisicing elit. Dolorem expedita sequi quam error sunt! In.",
  },
  {
    img: phone3,
    title: "Post title Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita sequi quam error sunt! In.",
  },
];

export const CardHoverEffect = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {cards.map((item, index) => (
          <div key={index} className={styles.box}>
            <div className={styles.imgBox}>
              <img src={item.img} alt={item.img} />

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
