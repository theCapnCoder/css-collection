import styles from "./styles.module.scss";
import rabbit1 from "./img/rabbit1.jpg";
import rabbit2 from "./img/rabbit2.jpg";
import rabbit3 from "./img/rabbit3.jpg";

const cards = [
  {
    img: rabbit1,
    title: "Rabbit One",
    text: "Magni, cumque laborum expedita blanditiis, dolorem sunt magnam a assumenda exercitationem labore id excepturi et eius, minima adipisci obcaecati ab aperiam placeat velit aspernatur quasi alias accusamus praesentium. Perspiciatis sed, odit commodi ad quis ducimus Lorem ipsum dolor si.",
  },
  {
    img: rabbit2,
    title: "Rabbit Two",
    text: "Magni, cumque laborum expedita blanditiis, dolorem sunt magnam a assumenda exercitationem labore id excepturi et eius, minima adipisci obcaecati ab aperiam placeat velit aspernatur quasi alias accusamus praesentium. Perspiciatis sed, odit commodi ad quis ducimus Lorem ipsum dolor si.",
  },
  {
    img: rabbit3,
    title: "Rabbit Three",
    text: "Magni, cumque laborum expedita blanditiis, dolorem sunt magnam a assumenda exercitationem labore id excepturi et eius, minima adipisci obcaecati ab aperiam placeat velit aspernatur quasi alias accusamus praesentium. Perspiciatis sed, odit commodi ad quis ducimus Lorem ipsum dolor si.",
  },
];

const ThreeDHoverEffects = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imgBox}>
              <img src={card.img} alt="rabbit" />
            </div>
            <div className={styles.contentBox}>
              <div>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </div>
            </div>

            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDHoverEffects;
