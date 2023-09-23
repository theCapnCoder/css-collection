import styles from "./styles.module.scss";
import planeImage from "./img/plane.png";

const NotFoundPage = () => {
  return (
    <div className={styles.error}>
      <div className={styles.sky}>
        <h2>404</h2>
        <div className={styles.grass}></div>
        <img src={planeImage} alt="plane" />
      </div>

      <div className={styles.field}>
        <h2>Oops...looks like you got lost</h2>
        <a href="#">Go Home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
