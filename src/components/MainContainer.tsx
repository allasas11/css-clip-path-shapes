import type { ReactNode } from "react";
import styles from "./MainContainer.module.scss";

type MainContainerProps = {
  children: ReactNode;
};

function MainContainer({ children }: MainContainerProps) {
  return (
    <div className={styles.mainContainer}>{children}</div>
  );
}
export default MainContainer;


