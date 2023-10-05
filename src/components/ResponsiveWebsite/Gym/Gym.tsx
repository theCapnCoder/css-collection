import styles from "./styles.module.scss";
import video from "./video/box.mp4";

const Gym = () => {
  return (
    <div className={styles.gym}>
      <div className={styles.logo}>
        <span>Logo</span>
      </div>

      <div className={styles.content}>
        <h2>Be stronger</h2>
        <h3>Never give up</h3>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          facilis reiciendis quas necessitatibus perferendis, minus doloremque
          eligendi veniam quis? Illo, officia quia rerum minima odit, quas minus
          harum ipsam eveniet laudantium temporibus itaque quibusdam tenetur,
          quisquam neque. Ullam inventore ab dolorem dolore dolorum porro
        </p>
        <button>Join Us</button>
      </div>
      <div className={styles.videoBox}>
        <video src={video} muted loop autoPlay></video>
        {/* <video src={video}></video> */}
      </div>
    </div>
  );
};

export default Gym;
