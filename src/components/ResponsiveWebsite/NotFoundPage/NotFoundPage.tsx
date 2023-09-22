import styles from "./styles.module.scss";
import planeImage from "./img/plane.png";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ceiling}>
        <div className={styles.imgBox}>
          <img src={planeImage} alt="plane" />
        </div>
        <div>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>
      </div>

      <div className={styles.floor}>
        <p>Opps...looks like you got lost</p>
        <button>Go Home</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
