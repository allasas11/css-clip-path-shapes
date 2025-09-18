import styles from "./BasicClipPathShape.module.scss";

const BasicClipPathShape: React.FC = () => {
  return (
    <div>
      <h1>Basic Clip Path Shapes</h1>
      <p>This is a basic example of a clip-path shapes.</p>
      <ul className={styles.shapesListContainer}>
        <li className={styles.shapeItemCard}>
            <div className={styles.CircleShape}></div>
        </li>
        <li className={styles.shapeItemCard}>
            <div className={styles.CornerCircleShape}></div>
        </li>
        <li className={styles.shapeItemCard}>
            <div className={styles.ellipseShape}></div>
        </li>
        <li className={styles.shapeItemCard}>
            <div className={styles.insetShape}></div>
        </li>
        <li className={styles.shapeItemCard}>
            <div className={styles.polygonShape}></div>
        </li>
      </ul>
    </div>
  );
}
 export default BasicClipPathShape;