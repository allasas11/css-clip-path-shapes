import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import FooterNavigation from "../components/FooterNavigation";
import MainContainer from "../components/MainContainer";
import styles from "./MainPageLayout.module.scss";

const MainPageLayout = () => (
  <div className={styles.pageLayout}>
    <MainNavigation />
      <main className={styles.mainContent}>
        <MainContainer>
            <Outlet />
        </MainContainer>
      </main>
    <FooterNavigation />
  </div>
);

export default MainPageLayout;