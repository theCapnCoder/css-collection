import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";

import styles from "./styles.module.scss";

const cards = [
  {
    img: img1,
    title: "Design",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum, vitae harum quidem voluptates eius, nisi nemo exercitationem eaque maxime officia iste ullam sed quam",
  },
  {
    img: img2,
    title: "Code",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum, vitae harum quidem voluptates eius, nisi nemo exercitationem eaque maxime officia iste ullam sed quam",
  },
  {
    img: img3,
    title: "Development",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum, vitae harum quidem voluptates eius, nisi nemo exercitationem eaque maxime officia iste ullam sed quam",
  },
];

const NeumorphismCard = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {cards.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imgBox}>
              <img src={item.img} alt="img" />
            </div>

            <div className={styles.content}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <a href="#">
                <span>Read More</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeumorphismCard;
