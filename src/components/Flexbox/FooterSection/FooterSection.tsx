import clsx from "clsx";
import styles from "./styles.module.scss";
import Facebook from "./img/Facebook";
import Twitter from "./img/Twitter";
import YouTube from "./img/YouTube";
import Instagram from "./img/Instagram";

const FooterSection = () => {
  return (
    <div className={styles.wrap}>
      <footer>
        <div className={styles.container}>
          <div className={clsx(styles.sec, styles.aboutUs)}>
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea
              quisquam sit eveniet, deleniti consectetur in soluta accusantium
              eligendi et consequatur ut aliquid, officia quas ab dolore
              excepturi pariatur quia numquam accusamus. Consequuntur voluptate
              illo quasi Dignissimos distinctio repellat repudiandae dolorem
              obcaecati. laborum, quidem dolorum voluptates provident debitis
              ullam iste fuga minus voluptatum vero.
            </p>
            <ul className={styles.socials}>
              <li>
                <a href="#">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <YouTube />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Quck Links</h3>
            <p>About</p>
            <p>FAQ</p>
            <p>Privacy Policy</p>
            <p>Help</p>
            <p>Terms & Conditions</p>
            <p>Contact</p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <div>
              <p>647 Linda Street Phoenixville, PA 163460, USA</p>
            </div>
            <div>
              <p>+1 234 567 8900</p>
              <p>+1 234 567 8900</p>
            </div>
            <div>
              <p>knowmore@email.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
