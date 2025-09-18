import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import FooterNavigation from "../components/FooterNavigation";
import MainContainer from "../components/MainContainer";


const MainPageLayout = () => (
  <>
    <MainNavigation />
    <MainContainer>
      <main>
        <Outlet />
      </main>
    </MainContainer>
    <FooterNavigation />
  </>
);

export default MainPageLayout;