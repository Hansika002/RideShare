import styles from "./styles.module.css";
import Navbar from "../Navbar";
import Car from "../../assets/logo.avif";
import {Link} from "react-router-dom";

const Main = () => {
  return (
    <div className={styles.main_container}>
      <nav>
        <Navbar />
      </nav>
      <div className={styles.container}>
        <div className={styles.left_part}>
          <img className={styles.img} src={Car} alt="logo" />
        </div>
        <div className={styles.right_part}>
          <h1>"Experience Freedom on Wheels!"</h1>
          <p>
            Experience Freedom on Wheels with our premium rental service.
            Whether you're embarking on a spontaneous road trip or simply need
            reliable transportation, we offer a diverse fleet to suit every
            journey. From sleek sedans to spacious SUVs, our vehicles are
            meticulously maintained to ensure your safety and comfort. With
            flexible rental options and competitive rates, we make it easy to
            hit the road with confidence. Embrace the open road and unlock a
            world of adventure with us. Your journey awaits!
          </p>
		  <button className={styles.black_btn}>
		  <div className={styles.link}>
		  <Link className={styles.Link} to="/search">Search</Link></div></button>
        </div>
      </div>
    </div>
  );
};

export default Main;
