import styles from "./InvertedBorderRadiusCardPage.module.scss";

const InvertedBorderRadiusCardPage: React.FC = () => {
  return (
    <div>
      <h1>Inverted Border Radius Card</h1>
      <ul className={styles.shapesListContainer}>
        <li className={styles.shapeItemCard}>
            <div className={styles.InvertedBorderRadiusCard}>
                <div className={styles.box}>
                    <div className={styles.imgBox}>
                        <video autoPlay loop muted>
                            <source src="/assets/VIDEO/lynx_cad_video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <h2>Alfonsas Alubeckas<span>Fullstack Developer</span>
                        </h2>
                        <ul className={styles.infoList}>
                            <li>Frontend<span>8/10</span></li>
                            <li>React<span>7/10</span></li>
                            <li>CSS<span>9/10</span></li>
                        </ul>
                        <button>Follow</button>
                    </div>
                </div>
                <div className={styles.circle}>
                    <div className={styles.imgBox}>
                        <img src="/assets/IMG/profile_picture.png" alt="Description" />
                    </div>
                </div>
            </div>
        </li>
        <li className={styles.shapeItemCard}>
            <div className={styles.cardWrapper}>
                <div className={styles.cardImg}>
                    <img src="/assets/IMG/pexels-green-electric-scooter.jpg" alt="green-electric-scooter" />
                </div>
                <div className={styles.tag}>
                    <p><span>€15,000</span></p>
                </div>
                <div className={styles.curveOne}>
                </div>
                <div className={styles.curveTwo}>
                </div>
            </div>
        </li>
      </ul>
    </div>
  );
}
 export default InvertedBorderRadiusCardPage;