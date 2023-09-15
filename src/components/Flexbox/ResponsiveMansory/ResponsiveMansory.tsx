import styles from "./style.module.scss";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";

export const ResponsiveMansory = () => {
  const items = [
    {
      img: img1,
      title: "Title Goes here",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit quidem consequuntur qui blanditiis. Laborum autem saepe consectetur ipsum temporibus rerum delectus voluptatum quaerat atque labore voluptas eaque debitis suscipit sequi a tempore error adipisci, sit assumenda eius doloremque nihil fugit? Totam, nihil debitis reiciendis tenetur cupiditate quam mollitia error!  ",
    },
    {
      img: img2,
      title: "Aut laudantium aspernatur",
      text: "Lorem ipsum dolor sit amet. Et itaque nesciunt qui voluptatem voluptas rem nemo impedit est ducimus perspiciatis. Ab autem nostrum qui Quis natus eum rerum nemo et voluptatum laboriosam.",
    },
    {
      img: img3,
      title: "Et aliquam minima",
      text: "Lorem ipsum dolor sit amet. Aut tempore quasi quo voluptas galisum eum illo autem et velit ratione. Sed accusamus temporibus et ipsum quos qui nihil dolores ut obcaecati mollitia aut eius dolore eos tempore accusamus ex numquam tempore. Et ipsa voluptatem et voluptatibus galisum qui dicta quas quo autem dignissimos qui nostrum recusandae eum natus laboriosam. Est nisi voluptas qui ipsam rerum non nesciunt rerum ut dignissimos velit aut alias voluptatibus vel ipsum quidem.Et itaque nesciunt qui voluptatem voluptas rem nemo impedit est ducimus perspiciatis.",
    },
    {
      img: img4,
      title: "Est quasi numquam vel",
      text: "Lorem ipsum dolor sit amet. Sit perspiciatis voluptas et iusto perferendis qui nulla tempore eum fugiat iusto qui omnis quas ut minus velit et ullam quisquam. Est cupiditate odit sed voluptatem illum id culpa quos eos adipisci iure non numquam voluptatem et temporibus labore nam modi voluptas?",
    },
    {
      img: img5,
      title: "Eum voluptatem ullam est",
      text: "Lorem ipsum dolor sit amet. Id magnam deleniti qui nesciunt fugit 33 optio totam. Non distinctio officiis eum iste saepe eos voluptate animi in eaque quos quo atque sapiente ab quia maiores.",
    },
    {
      img: img6,
      title: "Hic Quis quis",
      text: "Lorem ipsum dolor sit amet. Vel ipsam doloribus in pariatur doloribus in voluptatem sequi in numquam accusamus rem quidem officia sed impedit deserunt! At quia praesentium 33 consequatur voluptatem sed perferendis doloremque. Id velit placeat aut facere quia cum reprehenderit quis eos itaque soluta ut quod quaerat quo deserunt minima. Et possimus nemo ex voluptatem cupiditate aut exercitationem soluta 33 tenetur aliquam.",
    },
    {
      img: img7,
      title: "Qui aliquam consequatur et animi ",
      text: "Lorem ipsum dolor sit amet. Aut laudantium aspernatur et natus mollitia et modi iusto quo fugiat omnis. Aut alias aliquam sit internos tenetur qui accusantium facilis.",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={index} className={styles.box}>
            <img src={item.img} alt={item.img} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
