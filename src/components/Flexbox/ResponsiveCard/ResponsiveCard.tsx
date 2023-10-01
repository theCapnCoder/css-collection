import styles from "./styles.module.scss";
import img1 from "./img/photo1.jpg";
import img2 from "./img/photo2.jpg";
import img3 from "./img/photo3.jpg";
import quotes from "./img/quotes.png";

const cards = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum, vitae harum quidem voluptates eius, nisi nemo exercitationem eaque maxime officia iste ullam sed quam",
    img: img1,
    name: "John Doe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum, vitae harum quidem voluptates eius, nisi nemo exercitationem eaque maxime officia iste ullam sed quam",
    img: img2,
    name: "Anna Smith",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eum, vitae harum quidem voluptates eius, nisi nemo exercitationem eaque maxime officia iste ullam sed quam",
    img: img3,
    name: "Mike Doe",
  },
];

const ResponsiveCard = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {cards.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <img src={quotes} alt="quotes" className={styles.quote} />
              <p>{item.text}</p>
              <img src={item.img} alt={item.name} className={styles.user} />
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCard;
