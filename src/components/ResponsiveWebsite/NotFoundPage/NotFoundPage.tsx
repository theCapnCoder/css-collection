import styles from "./styles.module.scss";
import planeImage from "./img/plane.png";

const NotFoundPage = () => {
  return (
    <div className={styles.error}>
      <div className={styles.sky}>
        <h2>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h2>
        <div className={styles.grass}></div>
        <div className={styles.imgBox}>
          <img src={planeImage} alt="plane" />
        </div>
      </div>

      <div className={styles.field}>
        <h2>Oops...looks like you got lost</h2>
        <a href="/home">Go Home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
