import styles from "./HomePage.module.scss";

function Home() {
  return (
    <div className={styles.homeHeader}>
      <h1>Home: CSS Clip-Path Shapes</h1>
      <p>Explore various CSS clip-path shapes and their implementations.</p>
      <div className={styles.shapeExamples}>
        <h2>Shape Examples</h2>
        <ul className={styles.shapeList}>
          <li className={styles.shapeItemCard}>
            <a
              className={styles.shapeLink}
              href="/basic-clip-path">Basic Clip Path Shapes
            </a>
          </li>
          <li className={styles.shapeItemCard}>
            <a
              className={styles.shapeLink}
              href="/complex-clip-path">Complex Clip Path Shapes
            </a>
          </li>
          <li className={styles.shapeItemCard}>
            <a
              className={styles.shapeLink}
              href="/inverted-border-radius">Inverted Border Radius Card
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;