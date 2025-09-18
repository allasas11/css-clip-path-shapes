import styles from "./ComplexClipPathShape.module.scss";

const ComplexClipPathShape: React.FC = () => {
  return (
    <div>
      <h1>Complex Clip Path Shapes</h1>
      <p>This is a complex example of a clip-path shapes.</p>
      <ul className={styles.shapesListContainer}>
        <li className={styles.shapeItemCard}>
            <div className={styles.pathFunctionShape}></div>
        </li>
      </ul>
    </div>
  );
}
 export default ComplexClipPathShape;