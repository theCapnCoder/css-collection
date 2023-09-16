import React from "react";
import manImg from "./img/man.jpg";
import womanImg from "./img/woman.avif";

import styles from "./style.module.scss";

export const SplitScreen = () => {
  const cards = [
    {
      img: manImg,
      title: "Someone Famous",
    },
    {
      img: womanImg,
      title: "Someone Famous",
    },
  ];
  return (
    <section className={styles.split}>
      {cards.map((item, index) => (
        <div key={index} className={styles.screen}>
          <div className={styles.card}>
            <div className={styles.imgBx}>
              <img src={item.img} alt="" />
            </div>
            <h2>{item.title}</h2>
            <a href="#">Read more</a>
            <div className={styles.content}>
              <div className={styles.imgBx}>
                <img src={item.img} alt="" />
              </div>
              <h2>{item.title}</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus eum, vitae harum quidem voluptates eius, nisi nemo
                exercitationem eaque maxime officia iste ullam sed quam
                laboriosam beatae aliquid sint inventore, impedit nesciunt
                ipsum? Amet consectetur accusantium cupiditate inventore odit
                nemo. Deleniti repellat, nemo quidem voluptates, reiciendis
                maxime ea sint repellendus incidunt, quis porro modi odio. Id
                vel consequuntur illo assumenda sapiente, pariatur natus rem,
                iste recusandae hic expedita ratione fugit vero maiores dolores
                dignissimos a molestiae. Maxime cupiditate, at quia
                exercitationem ex in voluptate suscipit soluta veniam non
                similique nam, inventore repellat laboriosam placeat deserunt
                doloremque omnis ipsam iste? Commodi, consectetur aliquam
                nostrum beatae nesciunt odit at, ratione itaque dolores
                blanditiis maxime voluptatum, odio sed inventore dicta
                voluptatibus magnam voluptatem quis explicabo optio vel ex
                deleniti? Impedit, est. Nostrum minus quisquam consequuntur
                excepturi rem id, voluptates, pariatur blanditiis ad soluta
                dolor consectetur? Explicabo qui sequi mollitia. Beatae et
                architecto voluptatem.
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
